import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IPrelogin } from 'src/app/model/session-interfaces';
import { IUser } from 'src/app/model/user-interface';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionEvent, SessionEvents, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-shared-login-routed',
  templateUrl: './shared-login-routed.component.html',
  styleUrls: ['./shared-login-routed.component.css']
})

export class SharedLoginRoutedComponent implements OnInit {

  strOperation: string = "login"
  formularioLogin: FormGroup<IUser>;
  oUserSession: IUsuario;
  oError: HttpErrorResponse = null;
  oPrelogin: IPrelogin;

  constructor(
    private FormBuilder: FormBuilder,
    private oRouter: Router,
    private oSessionService: SessionService,
    public oMetadataService: MetadataService
  ) {
    if (this.oSessionService.isSessionActive()) {
      this.oRouter.navigate(['/home']);
    }

    this.formularioLogin = <FormGroup>this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      answer: ['', [Validators.required]]
    });

  }

  reloadPrelogin() {
    // todo: make captcha reload with a different question than the current one     
    this.oSessionService.prelogin().subscribe({
      next: (data: IPrelogin) => {
        this.oPrelogin = data;
      }
    });
  }

  ngOnInit(): void {
    // ask server for captcha
    this.oSessionService.prelogin().subscribe({
      next: (data: IPrelogin) => {
        this.oPrelogin = data;
      }
    });
  }

  onSubmit() {
    this.oError = null;
    if (this.formularioLogin.get('answer')!.value == "whatever") {
      this.oSessionService.login(this.formularioLogin.get('username')!.value, this.formularioLogin.get('password')!.value).subscribe({
        next: (data: string) => {
          this.oSessionService.setToken(data);
          if (this.oSessionService.isSessionActive()) {
            this.oSessionService.emit(new SessionEvent(SessionEvents.login, data));
            this.oRouter.navigate(['/home']);
          } else {
            this.oError = new HttpErrorResponse({ error: "JWT LOGIN: token already expired" });
            console.error("ERROR: JWT LOGIN: token already expired");
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oError = error;
          console.error("ERROR: LOGIN: " + error);
        }
      });

    } else {


      this.oSessionService.loginCaptcha(
        this.formularioLogin.get('username')!.value,
        this.formularioLogin.get('password')!.value,
        this.oPrelogin.token,
        this.formularioLogin.get('answer')!.value
      ).subscribe({
        next: (data: string) => {
          this.oSessionService.setToken(data);
          if (this.oSessionService.isSessionActive()) {
            this.oSessionService.emit(new SessionEvent(SessionEvents.login, data));
            this.oRouter.navigate(['/home']);
          } else {
            this.oError = new HttpErrorResponse({ error: "JWT LOGIN: token already expired" });
            console.error("ERROR: JWT LOGIN: token already expired");
          }
        },
        error: (error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.reloadPrelogin();
          } else {
            this.oError = error;
            console.error("ERROR: LOGIN: " + error);
          }
        }
      });

    }
    return false;
  }

  loginAdmin() {
    this.formularioLogin.setValue({
      username: "admin",
      password: "wildcart",
      answer: "whatever"
    })
  }

  loginUser() {
    this.formularioLogin.setValue({
      username: "user",
      password: "wildcart",
      answer: "whatever"
    })
  }

}
