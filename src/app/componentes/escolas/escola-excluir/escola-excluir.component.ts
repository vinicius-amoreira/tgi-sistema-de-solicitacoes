import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Escolas } from 'src/app/models/escolas.model';

@Component({
  selector: 'app-escola-excluir',
  templateUrl: './escola-excluir.component.html',
  styleUrls: ['./escola-excluir.component.css']
})
export class EscolaExcluirComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Escolas,
    public dialogRef: MatDialogRef<EscolaExcluirComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
