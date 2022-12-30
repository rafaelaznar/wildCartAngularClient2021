import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  strOperation: string = "login"
  formularioLogin: UntypedFormGroup;
  oUserSession: IUsuario;
  oError:HttpErrorResponse=null;

  constructor(
    private FormBuilder: UntypedFormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCarritoService: CarritoService,
    private oCryptoService: CryptoService,
    public oMetadataService: MetadataService
  ) {

    if (oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(oRoute.snapshot.data.message));
      oRouter.navigate(['/home']);
    } else {
      localStorage.clear();
    }

    this.formularioLogin = <UntypedFormGroup>this.FormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit(): void { }

  onSubmit() {
    const loginData = { login: this.formularioLogin.get('login')!.value, password: this.oCryptoService.getSHA256(this.formularioLogin.get('password')!.value) };
    console.log("login:onSubmit: ", loginData);
    this.oSessionService.login(JSON.stringify(loginData)).subscribe(
      data => {
        this.oError = null;
        localStorage.setItem("user", JSON.stringify(data));
        this.oSessionService.notifySessionChange('login');
        this.oCarritoService.notifyCarritoChange('login');
        if (data != null) {
          this.oRouter.navigate(['/', 'home']);
        } else {
          localStorage.clear();
        }
      }, (error: HttpErrorResponse) => {
        this.oError = error;
        console.error("ERROR: LOGIN: " + error);
      }
      );
    return false;
  }

  loginAdmin() {
    this.formularioLogin.setValue({
      login: "admin",
      password: "wildcart"
    })
  }

  loginUser() {
    this.formularioLogin.setValue({
      login: "user",
      password: "wildcart"
    })
  }

}
