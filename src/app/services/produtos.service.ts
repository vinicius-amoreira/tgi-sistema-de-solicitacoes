import { Injectable } from '@angular/core';
import {ProdutosModel} from "../models/produtos.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environments/environment.prod";
import {UnidadesDeMedidaModel} from "../models/unidades-de-medida.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  baseApiUrl = environment.apiUrl;
  apiUrl = `${this.baseApiUrl}/materials`;
  unitsUrl = `${this.baseApiUrl}/materials/unit`;
  lowStockUrl = `${this.apiUrl}/stock/low`;

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

  create(payload: ProdutosModel): Observable<ProdutosModel> {
    return this.http.post<ProdutosModel>(this.apiUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ProdutosModel[]> {
    return this.http.get<ProdutosModel[]>(this.apiUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readLowStock(): Observable<ProdutosModel[]> {
    return this.http.get<ProdutosModel[]>(this.lowStockUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readMeasurementUnities(): Observable<UnidadesDeMedidaModel[]> {
    const unitiesUrl = this.unitsUrl
    return this.http.get<UnidadesDeMedidaModel[]>(unitiesUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createMeasurementUnit(payload: UnidadesDeMedidaModel): Observable<UnidadesDeMedidaModel> {
    return this.http.post<UnidadesDeMedidaModel>(this.unitsUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateMeasurementUnit(payload: UnidadesDeMedidaModel): Observable<UnidadesDeMedidaModel> {
    const productIdUrl = `${this.unitsUrl}/${payload.id}`;
    return this.http.put<UnidadesDeMedidaModel>(productIdUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteMeasurementUnit(id: number): Observable<ProdutosModel> {
    const productIdUrl = `${this.unitsUrl}/${id}`;
    return this.http.delete<ProdutosModel>(productIdUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(payload: ProdutosModel): Observable<ProdutosModel> {
    const productIdUrl = `${this.apiUrl}/${payload.id}`;
    return this.http.put<ProdutosModel>(productIdUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ProdutosModel> {
    const productIdUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<ProdutosModel>(productIdUrl).pipe(
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
