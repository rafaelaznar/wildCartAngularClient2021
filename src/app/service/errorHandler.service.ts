import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  serviceHandleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      if (environment) console.log('Error handler Service: Error: ' + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `${error.status}\n${error.error.status}: Message: ${error.error.message}`;
      if (environment) console.log('Error handler Service: Error from server: ' + errorMessage);
    }
    return throwError(error);
  }

  componentHandleError(error: HttpErrorResponse):string {              
    if (error.status == 401) {
      return "Error: la sesión ha finalizado y debes volver a entrar en el sistema o no tienes permiso para realizar la operación";
    } 
    return "ERROR: status: " + error.status + " (" + error.error.status + ') ' + error.error.message;      
  }

}
