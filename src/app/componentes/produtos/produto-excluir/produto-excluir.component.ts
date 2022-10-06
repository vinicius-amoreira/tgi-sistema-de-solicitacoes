import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from '../../../models/produtos.model';
import {ProdutosService} from "../../../services/produtos.service";

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ExcluirProdutoComponent>,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct(payload: ProdutosModel): void {
    this.produtosService.delete(payload.id!).subscribe(() => {
      console.log('foi')
    }, () => {
      console.log('nao foi')
    })
  }
}
