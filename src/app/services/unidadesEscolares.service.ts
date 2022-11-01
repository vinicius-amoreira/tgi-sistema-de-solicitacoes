import { Injectable } from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators"
import {UnidadeEscolarModel} from "../models/escolas.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UnidadesEscolaresService {
  baseApiUrl = environment.apiUrl
  apiUrl = `${this.baseApiUrl}/schools/unit`

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(payload: UnidadeEscolarModel): Observable<UnidadeEscolarModel> {
    return this.http.post<UnidadeEscolarModel>(this.apiUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<UnidadeEscolarModel[]> {
    return this.http.get<UnidadeEscolarModel[]>(this.apiUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(payload: UnidadeEscolarModel): Observable<UnidadeEscolarModel> {
    const schoolIdUrl = `${this.apiUrl}/${payload.id}`;
    return this.http.put<UnidadeEscolarModel>(schoolIdUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<UnidadeEscolarModel> {
    const schoolIdUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<UnidadeEscolarModel>(schoolIdUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
