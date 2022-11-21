import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from '../../../models/produtos.model';
import {ProdutosService} from "../../../services/produtos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-unidades-de-medida-excluir',
  templateUrl: './unidades-de-medida-excluir.component.html',
  styleUrls: ['./unidades-de-medida-excluir.component.css']
})
export class ExcluirUnidadeDeMedidaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ExcluirUnidadeDeMedidaComponent>,
    private produtosService: ProdutosService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct(payload: ProdutosModel): void {
    this.produtosService.deleteMeasurementUnit(payload.id!).subscribe(() => {
      this.showMessage("Sucesso!")
    }, () => {
      this.showMessage("Erro!", true)
    })
    this.dialogRef.close();
  }
}
