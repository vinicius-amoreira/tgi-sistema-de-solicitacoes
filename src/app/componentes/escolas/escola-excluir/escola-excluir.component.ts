import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EscolasModel } from 'src/app/models/escolas.model';
import {EscolasService} from "../../../services/escolas.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    this.escolasService.delete(payload.id!).subscribe(() => {
      this.showMessage("Sucesso!")
    }, () => {
      this.showMessage("Erro!", true)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
