import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SolicitacoesModel} from "../models/solicitacoes.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {DashboardDataModel} from "../models/dashboard-data.model";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  baseApiUrl = environment.apiUrl
  apiUrl = `${this.baseApiUrl}/requests`

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

  create(payload: SolicitacoesModel): Observable<SolicitacoesModel> {
    return this.http.post<SolicitacoesModel>(this.apiUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandlerQuantity(e))
    );
  }

  read(): Observable<SolicitacoesModel[]> {
    return this.http.get<SolicitacoesModel[]>(this.apiUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(payload: SolicitacoesModel): Observable<SolicitacoesModel> {
    const requestIdUrl = `${this.apiUrl}/${payload.id}`;
    return this.http.put<SolicitacoesModel>(requestIdUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<SolicitacoesModel> {
    const requestIdUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<SolicitacoesModel>(requestIdUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  filterByDateInterval(start_date: string, end_date: string ): Observable<SolicitacoesModel[]> {
    const filteredByDateUrl = `${this.apiUrl}/item/in-interval/${start_date}/${end_date}`
    return this.http.get<SolicitacoesModel[]>(filteredByDateUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  getDashboardGraphData(itemId: number, year: number): Observable<DashboardDataModel[]> {
    const url = `${this.apiUrl}/item/material/${itemId}/year/${year}`

    return this.http.get<DashboardDataModel[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  errorHandlerQuantity(e: any): Observable<any> {
    console.log(e);
    this.showMessage('ERRO! A Quantidade de saída foi maior que a de estoque!', true);
    return EMPTY;
  }

}
