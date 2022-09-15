import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produtos } from 'src/app/models/produtos.model';

@Component({
  selector: 'app-produto-adicionar-ou-editar',
  templateUrl: './produto-adicionar-ou-editar.component.html',
  styleUrls: ['./produto-adicionar-ou-editar.component.css']
})
export class ProdutoAdicionarOuEditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Produtos,
    public dialogRef: MatDialogRef<ProdutoAdicionarOuEditarComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
