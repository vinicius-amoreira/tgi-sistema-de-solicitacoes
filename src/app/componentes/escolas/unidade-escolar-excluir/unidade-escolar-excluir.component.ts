import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EscolasModel} from "../../../models/escolas.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  deleteSchool(payload: EscolasModel): void {
    this.unidadesEscolaresService.delete(payload.id!).subscribe(() => {
      this.showMessage("Sucesso!")
    }, () => {
      this.showMessage("Erro!", true)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
