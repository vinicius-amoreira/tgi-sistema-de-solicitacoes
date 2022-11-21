import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from '../../../models/produtos.model';
import {ProdutosService} from "../../../services/produtos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-unidades-de-medida-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ExcluirProdutoComponent>,
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
    this.produtosService.delete(payload.id!).subscribe(() => {
      this.showMessage("Sucesso!")
    }, () => {
      this.showMessage("Erro!", true)
    })
  }
}
