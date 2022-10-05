import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from '../../../models/produtos.model';

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ExculirProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ExculirProdutoComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
