
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { FileService } from 'src/app/service/file.service';


import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IComment, IComment2Send } from 'src/app/model/comment-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';

@Component({
  selector: 'app-comment-form-admin-unrouted',
  templateUrl: './comment-form-admin-unrouted.component.html',
  styleUrls: ['./comment-form-admin-unrouted.component.css']
})

export class CommentFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.product
  oComment2Send: IComment2Send = null;
  oComment2Show: IComment = null;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;

  selectedFiles?: FileList;
  selectedFile: string;
  imageSrc: string = null;
  file2Send: File = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oCommentService: CommentService,
    private oFileService: FileService,
    public oMetadataService: MetadataService,
    public oUsuarioService: UsuarioService,
    public oProductoService: ProductoService,
  ) { }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        codigo: ['', [Validators.required]],
        nombre: ['', Validators.required],
        existencias: [''],
        precio: [''],
        imagen: [''],
        descuento: [''],
        id_tipocomment: ['', Validators.required],
      });
    }
  }

  get = (): void => {
    this.oCommentService.getOne(this.id).subscribe((oData: IComment) => {
      this.oComment2Show = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oComment2Show.id],
        codigo: [this.oComment2Show.comment, [Validators.required],],
        id_usuario: [this.oComment2Show.usuario.id, [Validators.required],],
        id_producto: [this.oComment2Show.producto.id, [Validators.required],],
      });
    }, (error: HttpErrorResponse) => {
      this.status = error;
      this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
    })
  };

  processFile($event: Event) {
    const reader = new FileReader();
    if ((<HTMLInputElement>$event.target).files && (<HTMLInputElement>$event.target).files.length) {
      this.selectedFiles = (<HTMLInputElement>$event.target).files;
      if (this.selectedFiles) {
        this.file2Send = this.selectedFiles.item(0);
        this.selectedFile = this.file2Send.name;
        if (this.file2Send) {
          reader.readAsDataURL(this.file2Send);
          reader.onload = () => {
            this.imageSrc = reader.result as string;
            this.oForm.controls['imagen'].markAsDirty();
          };
        }
      }
    }
  }

  onSubmit(): void {
    if (this.imageSrc) {
      this.oFileService.uploadImage(this.file2Send).subscribe(
        (serverResponse: number) => {
          this.save(serverResponse);
        },
        (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        })
    } else {
      this.save(this.oForm.value.imagen);
    }
  }

  save(img: number): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oComment2Send = {
          id: this.oForm.value.id,
          comment: this.oForm.value.comment,
          usuario: { id: this.oForm.value.id_usuario },
          producto: { id: this.oForm.value.id_producto },
        }
        if (this.strOperation == "new") {
          this.oCommentService
            .newOne(this.oComment2Send)
            .subscribe((id) => {
              this.status = null;
              this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
            }, (error: HttpErrorResponse) => {
              this.status = error;
              this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
            });
        } else {
          this.oCommentService
            .updateOne(this.oComment2Send)
            .subscribe((id: number) => {
              this.status = null;
              this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
            }, (error: HttpErrorResponse) => {
              this.status = error;
              this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
            });
        }
      }
    }
  }

  //ajenas

  onFindSelection($event: number) {
    this.oForm.controls['id_tipocomment'].setValue($event);
    this.oForm.controls['id_tipocomment'].markAsDirty();
    this.oProductoService
      .getOne(this.oForm.controls['id_tipocomment'].value)
      .subscribe((oProducto: IProducto) => {
        if (this.strOperation == "edit") {
          this.oComment2Show.producto = oProducto;
        } else {
          this.oComment2Show = {} as IComment;
          this.oComment2Show.producto = {} as IProducto;
          this.oComment2Show.producto = oProducto;
        }
      }, err => {
        this.oComment2Show.producto.nombre = "ERROR";
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

}
