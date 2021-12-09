import { IProducto, IProducto2Send } from '../../../../../model/producto-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { FileService } from 'src/app/service/file.service';

declare let $: any;

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  strEntity: string = "producto"
  strOperation: string = "edit"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  oProducto2Send: IProducto2Send = null;
  oProducto2Show: IProducto = null;
  oForm: FormGroup = null;
  id: number = null;
  strResult: string = null;
  oUserSession: IUsuario;

  //selectedFile: ImageSnippet;
  //previewImage:any;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oFileService: FileService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oRoute: ActivatedRoute,
    public oIconService: IconService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();

  }

  ngOnInit(): void { }

  getOne = (): void => {
    this.oProductoService.get(this.id).subscribe((oData: IProducto) => {
      this.oProducto2Show = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oProducto2Show.id],
        codigo: [this.oProducto2Show.codigo, [Validators.required],],
        nombre: [this.oProducto2Show.nombre, [Validators.required, Validators.minLength(5)],],
        existencias: this.oProducto2Show.existencias,
        precio: this.oProducto2Show.precio,
        imagen: this.oProducto2Show.imagen,
        descuento: this.oProducto2Show.descuento,
        tipoproducto: [this.oProducto2Show.tipoproducto.id, [Validators.required],],
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

  selectedFiles?: FileList;
  imageSrc: string = null;
  file2Send: File = null;
  selectedFile:string;

  onSubmit(): void {
        
    console.log("-->nombre: " , this.selectedFile);
    //const file: File = imageInput.files[0];
    //this.selectedFile = new ImageSnippet(  this.imageSrc , file);
    this.oFileService.uploadImage(this.file2Send).subscribe(
      (serverResponse) => {
        if (this.oForm) {
          this.oProducto2Send = {
            id: this.id,
            codigo: this.oForm.value.codigo,
            nombre: this.oForm.value.nombre,
            existencias: this.oForm.value.existencias,
            precio: this.oForm.value.precio,
            imagen: serverResponse,
            descuento: this.oForm.value.descuento,
            tipoproducto: { id: this.oForm.value.tipoproducto },
          }
          console.log(this.oProducto2Send)
          this.oProductoService
            .update(this.oProducto2Send)
            .subscribe((oProducto: IProducto) => {
              if (oProducto.id) {
                this.strResult = this.strTitleSingular + ' modificado correctamente';
              } else {
                this.strResult = this.strTitleSingular + ': error en la modificación del registro';
              }
              this.openPopup();
            });
        }
      },
      (err) => {
        this.strResult = this.strTitleSingular + 'Error al cambiar el registro: ' + err.error.message;
        console.log("Upload error:", err.error.message);
        this.openPopup();
      })

  }

  update = (): void => {

  };


  goBack(): void {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }

}
