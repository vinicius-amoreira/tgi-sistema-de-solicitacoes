import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EscolasModel} from "../../../models/escolas.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";

@Component({
  selector: 'app-unidade-escolar-excluir',
  templateUrl: './unidade-escolar-excluir.component.html',
  styleUrls: ['./unidade-escolar-excluir.component.css']
})
export class UnidadeEscolarExcluirComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EscolasModel,
    public dialogRef: MatDialogRef<UnidadeEscolarExcluirComponent>,
    private unidadesEscolaresService: UnidadesEscolaresService,
  ) { }

  ngOnInit(): void {
  }

  deleteSchool(payload: EscolasModel): void {
    this.unidadesEscolaresService.delete(payload.id!).subscribe(() => {
      console.log('foi')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
