import { IProducto, IProducto2Send } from '../../../../../../model/producto-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { FileService } from 'src/app/service/file.service';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-producto-form-admin-unrouted',
  templateUrl: './producto-form-admin-unrouted.component.html',
  styleUrls: ['./producto-form-admin-unrouted.component.css']
})

export class ProductoFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  strEntity: string = Constants.ENTITIES.product
  oProducto2Send: IProducto2Send = null;
  oProducto2Show: IProducto = null;
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
    private oProductoService: ProductoService,
    private oFileService: FileService,
    public oMetadataService: MetadataService,
    public oTipoproductoService: TipoproductoService
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
        id_tipoproducto: ['', Validators.required],
      });
    }
  }

  get = (): void => {
    this.oProductoService.getOne(this.id).subscribe((oData: IProducto) => {
      this.oProducto2Show = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oProducto2Show.id],
        codigo: [this.oProducto2Show.codigo, [Validators.required],],
        nombre: [this.oProducto2Show.nombre, [Validators.required, Validators.minLength(5)],],
        existencias: this.oProducto2Show.existencias,
        precio: this.oProducto2Show.precio,
        imagen: this.oProducto2Show.imagen,
        descuento: this.oProducto2Show.descuento,
        id_tipoproducto: [this.oProducto2Show.tipoproducto.id, [Validators.required],],
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
        this.oProducto2Send = {
          id: this.id,
          codigo: this.oForm.value.codigo,
          nombre: this.oForm.value.nombre,
          existencias: this.oForm.value.existencias,
          precio: this.oForm.value.precio,
          imagen: img,
          descuento: this.oForm.value.descuento,
          tipoproducto: { id: this.oForm.value.id_tipoproducto },
        }
        if (this.strOperation == "new") {
          this.oProductoService
            .newOne(this.oProducto2Send)
            .subscribe((id: number) => {
              this.status = null;
              this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
            }, (error: HttpErrorResponse) => {
              this.status = error;
              this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
            });
        } else {
          this.oProductoService
            .updateOne(this.oProducto2Send)
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
    this.oForm.controls['id_tipoproducto'].setValue($event);
    this.oForm.controls['id_tipoproducto'].markAsDirty();
    this.oTipoproductoService
      .getOne(this.oForm.controls['id_tipoproducto'].value)
      .subscribe((oTipoproducto: ITipoproducto) => {
        if (this.strOperation == "edit") {
          this.oProducto2Show.tipoproducto = oTipoproducto;
        } else {
          this.oProducto2Show = {} as IProducto;
          this.oProducto2Show.tipoproducto = {} as ITipoproducto;
          this.oProducto2Show.tipoproducto = oTipoproducto;
        }
      }, err => {
        this.oProducto2Show.tipoproducto.nombre = "ERROR";
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

}
