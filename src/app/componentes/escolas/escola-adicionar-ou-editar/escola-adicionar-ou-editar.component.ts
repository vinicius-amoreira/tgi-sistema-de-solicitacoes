import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EscolasModel} from 'src/app/models/escolas.model';
import {EscolasService} from "../../../services/escolas.service";

@Component({
  selector: 'app-escola-adicionar-ou-editar',
  templateUrl: './escola-adicionar-ou-editar.component.html',
  styleUrls: ['./escola-adicionar-ou-editar.component.css']
})
export class EscolaAdicionarOuEditarComponent implements OnInit {
  editMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EscolasModel,
    public dialogRef: MatDialogRef<EscolaAdicionarOuEditarComponent>,
    private escolasService: EscolasService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.editMode = !!this.data.id;
  }

  saveSchool(payload: EscolasModel): void {
    if (this.editMode) {
      this.escolasService.update(payload).subscribe()
    }
    else {
      this.escolasService.create(payload).subscribe()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
