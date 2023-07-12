import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoService } from './crypto.service';
import { API_URL, httpOptions } from 'src/environments/environment';
import { DecodeService } from './decode.service';
import { IToken } from '../model/token-interface';
import { filter, map, multicast } from 'rxjs/operators';
import { IUsuario } from '../model/usuario-interfaces';
import { UsuarioService } from './usuario.service';
import { IPrelogin } from '../model/session-interfaces';
import { Token } from '@angular/compiler';

export enum SessionEvents {
    login,
    logout
}

export class SessionEvent {
    constructor(public event: SessionEvents, public token?: string) { }
}

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/session';
    sURL: string = `${API_URL}${this.entityURL}`;
    subject = new Subject<SessionEvent>();
    subjectUserSession = new Subject();

    constructor(
        private oCryptoService: CryptoService,
        private oUsuarioService: UsuarioService,
        private oHttpClient: HttpClient,
        private oDecodeService: DecodeService
    ) { }

    login(strLogin: string, strPassword: string): Observable<string> {
        const loginData = JSON.stringify({ username: strLogin, password: this.oCryptoService.getSHA256(strPassword) });
        return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions);
    }

    prelogin(): Observable<IPrelogin> {
        return this.oHttpClient.get<IPrelogin>(this.sURL + "/prelogin", httpOptions);
    }

    loginCaptcha(strLogin: string, strPassword: string, strToken: string, strAnswer: string): Observable<string> {
        const loginData = JSON.stringify({
            username: strLogin,
            password: this.oCryptoService.getSHA256(strPassword),
            token: strToken,
            answer: strAnswer
        });
        return this.oHttpClient.post<string>(this.sURL + "/loginc", loginData, httpOptions);
    }

    getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.parseJwt(token).name;
        }
    }

    getUsuario(): Observable<IUsuario> {
        if (!this.isSessionActive()) {
            return null;
        } else {
            let token: string = localStorage.getItem("token");
            let username: string = this.oDecodeService.parseJwt(token).name;
            //return this.oUsuarioService.getByUsername(username).pipe(multicast(this.subjectUserSession));
            return this.oUsuarioService.getByUsername(username);
        }
    }

    getToken(): string {
        return localStorage.getItem("token");
    }

    setToken(data: string): void {
        localStorage.setItem("token", data);
    }

    isSessionActive(): Boolean {
        let strToken: string = localStorage.getItem("token");
        if (strToken) {
            let oDecodedToken: IToken = this.oDecodeService.parseJwt(strToken);
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem("token");
    }

    on(event: SessionEvents): Observable<String> { // pte cambiar a onChange
        return this.subject.pipe(
            filter((e: SessionEvent) => {
                return e.event === event;
            }),
            map((e: SessionEvent) => {
                return e.token;
            })
        )
    }

    emit(event: SessionEvent) {
        this.subject.next(event);
    }

}

