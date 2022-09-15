import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Escolas } from 'src/app/models/escolas.model';

@Component({
  selector: 'app-escola-excluir',
  templateUrl: './escola-excluir.component.html',
  styleUrls: ['./escola-excluir.component.css']
})
export class EscolaExcluirComponent implements OnInit {

  constructor(
    public data: Escolas,
    public dialogRef: MatDialogRef<EscolaExcluirComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
