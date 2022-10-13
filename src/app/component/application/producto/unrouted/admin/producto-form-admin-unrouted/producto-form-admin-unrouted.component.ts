import { IProducto, IProducto2Send } from '../../../../../../model/producto-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { FileService } from 'src/app/service/file.service';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

declare let $: any;

@Component({
  selector: 'app-producto-form-admin-unrouted',
  templateUrl: './producto-form-admin-unrouted.component.html',
  styleUrls: ['./producto-form-admin-unrouted.component.css']
})

export class ProductoFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  strEntity: string = "producto"
  //strOperation: string = "newedit" //new or edit depends on the url
  strTitleSingular: string = "Producto";
  strATitleSingular: string = "El producto";
  strTitlePlural: string = "Productos";
  oProducto2Send: IProducto2Send = null;
  oProducto2Show: IProducto = null;
  oForm: UntypedFormGroup = null;
  //id: number = null;
  
  //oUserSession: IUsuario;

  //selectedFile: ImageSnippet;
  //previewImage:any;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oProductoService: ProductoService,
    private oFileService: FileService,
    public oMetadataService: MetadataService,
    public oTipoproductoService: TipoproductoService
  ) {
  }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.getOne();
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

  getOne = (): void => {
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
    });
  };


  processFile($event: any) {
    const reader = new FileReader();
    if ($event.target.files && $event.target.files.length) {
      this.selectedFiles = $event.target.files;
      if (this.selectedFiles) {
        this.file2Send = this.selectedFiles.item(0);
        this.selectedFile = this.file2Send.name;
        if (this.file2Send) {
          reader.readAsDataURL(this.file2Send);
          reader.onload = () => {
            this.imageSrc = reader.result as string;
            this.oForm.controls['imagen'].markAsDirty();
            //this.oForm.patchValue({
            //  imagen: reader.result
            //});

          };
        }
      }
    }
  }

  onSubmit(): void {
    //console.log("-->nombre: ", this.selectedFile);
    //const file: File = imageInput.files[0];
    //this.selectedFile = new ImageSnippet(  this.imageSrc , file);
    let strResult: string = '';
    if (this.imageSrc) {
      this.oFileService.uploadImage(this.file2Send).subscribe(
        (serverResponse) => {
          this.save(serverResponse);
        },
        (err) => {
          strResult = this.strTitleSingular + 'Error al cambiar el registro: ' + err.error.message;
          //console.log("Img Upload error:", err.error.message);
          this.msg.emit({ strMsg: strResult, id: 0 });
        })
    } else {
      this.save(this.oForm.value.imagen);
    }
  }

  selectedFiles?: FileList;
  imageSrc: string = null;
  file2Send: File = null;
  selectedFile: string;

  save(img: number): void {
    let strResult: string = '';
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
              if (id > 0) {
                this.id = id;
                strResult = this.strATitleSingular + ' se ha creado correctamente con el id: ' + id;
              } else {
                strResult = 'Error en la creación de ' + this.strATitleSingular.toLowerCase();
              }
              this.msg.emit({ strMsg: strResult, id: this.id });
            });
        } else {
          this.oProductoService
            .updateOne(this.oProducto2Send)
            .subscribe((id: number) => {
              if (id) {
                this.id = id;
                strResult = this.strATitleSingular + ' con id=' + id + ' se ha modificado correctamente';
              } else {
                strResult = 'Error en la modificación de ' + this.strATitleSingular.toLowerCase();
              }
              this.msg.emit({ strMsg: strResult, id: this.id });
            });
        }
      }
    }
  }

  //ajenas

  onFindSelection($event: any) {
    this.oForm.controls['id_tipoproducto'].setValue($event);
    this.oForm.controls['id_tipoproducto'].markAsDirty();
    this.oTipoproductoService
      .getOne(this.oForm.controls['id_tipoproducto'].value)
      .subscribe((oTipoproducto: ITipoproducto) => {
        if (this.strOperation == "edit") {
          this.oProducto2Show.tipoproducto = oTipoproducto; //pte!!
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
