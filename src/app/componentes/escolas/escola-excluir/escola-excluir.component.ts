import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EscolasModel } from 'src/app/models/escolas.model';
import {EscolasService} from "../../../services/escolas.service";

@Component({
  selector: 'app-escola-excluir',
  templateUrl: './escola-excluir.component.html',
  styleUrls: ['./escola-excluir.component.css']
})
export class EscolaExcluirComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EscolasModel,
    public dialogRef: MatDialogRef<EscolaExcluirComponent>,
    private escolasService: EscolasService,
  ) { }

  ngOnInit(): void {
  }

  deleteSchool(payload: EscolasModel): void {
    this.escolasService.delete(payload.id!).subscribe(() => {
      console.log('foi')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
