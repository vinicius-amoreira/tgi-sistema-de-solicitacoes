import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EscolasModel, UnidadeEscolarModel} from "../../../models/escolas.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";
import {EscolaAdicionarOuEditarComponent} from "../escola-adicionar-ou-editar/escola-adicionar-ou-editar.component";
import {EscolasService} from "../../../services/escolas.service";

@Component({
  selector: 'app-unidade-escolar-adicionar-ou-editar',
  templateUrl: './unidade-escolar-adicionar-ou-editar.component.html',
  styleUrls: ['./unidade-escolar-adicionar-ou-editar.component.css']
})
export class UnidadeEscolarAdicionarOuEditarComponent implements OnInit {
  editMode: boolean = false;
  escolas: EscolasModel[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: UnidadeEscolarModel,
    public dialogRef: MatDialogRef<UnidadeEscolarAdicionarOuEditarComponent>,
    private unidadesEscolaresService: UnidadesEscolaresService,
    private escolasService: EscolasService,
  ) { }

  ngOnInit(): void {
    this.listSchools();
    console.log(this.data);
    this.editMode = !!this.data.id
  }

  listSchools(): void {
    this.escolasService.read().subscribe((data) => {
      this.escolas = data;
    })
  }

  saveSchoolUnit(payload: UnidadeEscolarModel): void {
    const formatedPayload = {
      school: {
        id: payload.school.id
      },
      name: payload.name,
      address: payload.address,
      phone: [
        {
        phone: '(11)9999-9999',
        description: 'Secretaria',
        },
      ]
    } as unknown as UnidadeEscolarModel
    if (this.editMode) {
      this.unidadesEscolaresService.update(formatedPayload).subscribe()
    }
    else {
      this.unidadesEscolaresService.create(formatedPayload).subscribe()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
