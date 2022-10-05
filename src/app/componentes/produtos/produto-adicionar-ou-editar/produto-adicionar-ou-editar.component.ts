import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';

@Component({
  selector: 'app-produto-adicionar-ou-editar',
  templateUrl: './produto-adicionar-ou-editar.component.html',
  styleUrls: ['./produto-adicionar-ou-editar.component.css']
})
export class ProdutoAdicionarOuEditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ProdutoAdicionarOuEditarComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
