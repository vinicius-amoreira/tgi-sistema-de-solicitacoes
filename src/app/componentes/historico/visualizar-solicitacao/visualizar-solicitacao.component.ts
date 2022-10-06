import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SolicitacoesModel} from "../../../models/solicitacoes.model";

@Component({
  selector: 'app-visualizar-solicitacao',
  templateUrl: './visualizar-solicitacao.component.html',
  styleUrls: ['./visualizar-solicitacao.component.css']
})
export class VisualizarSolicitacaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: SolicitacoesModel,
    public dialogRef: MatDialogRef<VisualizarSolicitacaoComponent>,
  ) { }

  ngOnInit(): void {
  }

}
