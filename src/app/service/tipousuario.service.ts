import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
	API_URL,
	environment,
	httpOptions,
} from 'src/environments/environment';
import { ITipoUsuarioPage, IUserType } from '../model/tipousuario-interfaces';

@Injectable({
	providedIn: 'root',
})
export class TipousuarioService {
	constructor(private http: HttpClient) {}

	sURL = API_URL + '/tusuario';

	handleError(error: HttpErrorResponse) {
		let errorMessage = 'Unknown error!';
		if (error.error instanceof ErrorEvent) {
			// Client-side errors
			errorMessage = `Error: ${error.error.message}`;
			if (environment) console.log('SessionService: error: ' + errorMessage);
		} else {
			// Server-side errors
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
			if (environment) console.log('SessionService: error: ' + errorMessage);
		}
		return throwError(errorMessage);
	}

	view(id: number): Observable<IUserType> {
		return this.http
			.get<IUserType>(`${this.sURL}/${id}`, httpOptions)
			.pipe(catchError(this.handleError));
	}

	plist(
		page: number,
		size: number,
		orderBy: string,
		orderAs: boolean
	): Observable<ITipoUsuarioPage> {
		const sort: string = `${orderBy},${orderAs ? 'asc' : 'desc'}`;
		return this.http
			.get<ITipoUsuarioPage>(
				`${this.sURL}/page?page=${page}size=${size}sort=${sort}`,
				httpOptions
			)
			.pipe(catchError(this.handleError));
	}

	edit(body: IUserType): Observable<IUserType> {
		return this.http
			.put<IUserType>(this.sURL, body, httpOptions)
			.pipe(catchError(this.handleError));
	}
}
