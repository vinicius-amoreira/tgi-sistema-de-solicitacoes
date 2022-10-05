import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EscolasModel } from 'src/app/models/escolas.model';

@Component({
  selector: 'app-escola-adicionar-ou-editar',
  templateUrl: './escola-adicionar-ou-editar.component.html',
  styleUrls: ['./escola-adicionar-ou-editar.component.css']
})
export class EscolaAdicionarOuEditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EscolasModel,
    public dialogRef: MatDialogRef<EscolaAdicionarOuEditarComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
