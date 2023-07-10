import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { FileService } from 'src/app/service/file.service';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IComment, IComment2Send } from 'src/app/model/comment-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';

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
  strEntity: string = Constants.ENTITIES.comment
  oComment2Send: IComment2Send = null;
  oComment2Show: IComment = null;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;


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
        comment: ['', [Validators.required]],
        creation: ['', [Validators.required]],
        lastedition: ['', []],
        id_usuario: ['', Validators.required],
        id_producto: ['', Validators.required]
      });
    }
  }

  get = (): void => {
    this.oCommentService.getOne(this.id).subscribe({
      next: (oData: IComment) => {
        this.oComment2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oComment2Show.id],
          comment: [this.oComment2Show.comment, [Validators.required],],
          creation: [this.oComment2Show.creation, [Validators.required]],
          lastedition: [this.oComment2Show.lastedition, []],
          id_usuario: [this.oComment2Show.usuario.id, [Validators.required],],
          id_producto: [this.oComment2Show.producto.id, [Validators.required],],
        });
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      }
    })
  };



  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oComment2Send = {
          id: this.oForm.value.id,
          comment: this.oForm.value.comment,
          usuario: {
            id: this.oForm.value.id_usuario
          },
          producto: {
            id: this.oForm.value.id_producto
          }

        };
        this.save();
      }
    }
    this.save();
  }

  save(): void {
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
            .subscribe({
              next: (id) => {
                this.status = null;
                this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
              }, error: (error: HttpErrorResponse) => {
                this.status = error;
                this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
              }
            });
        } else {
          this.oCommentService
            .updateOne(this.oComment2Send)
            .subscribe({
              next: (id: number) => {
                this.status = null;
                this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
              }, error: (error: HttpErrorResponse) => {
                this.status = error;
                this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
              }
            });
        }
      }
    }
  }

  //ajenas

  onFindSelectionUsuario($event: number) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    this.oUsuarioService
      .getOne(this.oForm.controls['id_usuario'].value)
      .subscribe({
        next: (oUsuario: IUsuario) => {
          if (this.strOperation == "edit") {
            this.oComment2Show.usuario = oUsuario;
          } else {
            this.oComment2Show = {} as IComment;
            this.oComment2Show.usuario = {} as IUsuario;
            this.oComment2Show.usuario = oUsuario;
          }
        },
        error: (err) => {
          this.oComment2Show.producto.nombre = "ERROR";
          this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
        }
      });

    return false;
  }

  onFindSelectionProducto($event: number) {
    this.oForm.controls['id_producto'].setValue($event);
    this.oForm.controls['id_producto'].markAsDirty();
    this.oProductoService
      .getOne(this.oForm.controls['id_producto'].value)
      .subscribe({
        next: (oproducto: IProducto) => {
          if (this.strOperation == "edit") {
            this.oComment2Show.producto = oproducto;
          } else {
            this.oComment2Show = {} as IComment;
            this.oComment2Show.producto = {} as IProducto;
            this.oComment2Show.producto = oproducto;
          }
        },
        error: (err) => {
          this.oComment2Show.producto.nombre = "ERROR";
          this.oForm.controls['id_producto'].setErrors({ 'incorrect': true });
        }
      });

    return false;
  }

}
