
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-factura-edit-admin-routed',
  templateUrl: './factura-edit-admin-routed.component.html',
  styleUrls: ['./factura-edit-admin-routed.component.css']
})
export class FacturaEditAdminRoutedComponent implements OnInit {

  oData2Show: IFactura = null;
  oData2Send: IFactura2Send = null;
  id: number = null;
  oForm: UntypedFormGroup = null;
  strUsuarioSession: string;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.edit

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oRouter: Router,
    private oFacturaService: FacturaService,
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id
    this.get();
  }

  ngOnInit(): void { }

  get = (): void => {
    this.oFacturaService.getOne(this.id).subscribe((oData: IFactura) => {      
      this.oData2Show = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oData2Show.id],
        fecha: [this.oData2Show.fecha, Validators.required],
        iva: [this.oData2Show.iva, Validators.required],
        pagado: [this.oData2Show.pagado],
        id_usuario: [this.oData2Show.usuario.id, Validators.required]
      });      
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oData2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        iva: this.oForm.value.iva,
        pagado: this.oForm.value.pagado,
        usuario: {
          id: this.oForm.value.id_usuario
        }
      }
      this.update();
    }
  }

  update = (): void => {
    let strResult: string = '';
    //console.log(this.oData2Send);
    this.oFacturaService.updateOne(this.oData2Send).subscribe((id: number) => {
      if (id > 0) {
        strResult = this.oMetadataService.getName('the' + this.strEntity) + ' con id=' + id + ' se ha modificado correctamente';
      } else {
        strResult = 'Error en la modificación de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
      }
      this.openPopup(strResult);
    })
  }

  reportResult = (oResult: any): void => {
    this.id = oResult.id;
    this.openPopup(oResult.strMsg);
  };

  goBack(): void {
    this.oLocation.back();
  }

  //ajenas 

  onFindSelection($event: any) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    this.oUsuarioService
      .getOne(this.oForm.controls['id_usuario'].value)
      .subscribe((oData: IUsuario) => {
        if (this.strOperation == "edit") {
          this.oData2Show.usuario = oData;
        } else {
          this.oData2Show = {} as IFactura;
          this.oData2Show.usuario = {} as IUsuario;;
          this.oData2Show.usuario = oData;
        }
      }, err => {
        this.oData2Show.usuario.nombre = "ERROR";
        this.oData2Show.usuario.apellido1 = "";
        this.oData2Show.usuario.apellido2 = "";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }

}