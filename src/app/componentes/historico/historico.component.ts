import { Component, OnInit } from '@angular/core';
import {ProdutosModel} from "../../models/produtos.model";
import {MatTable} from "@angular/material/table";
import {SolicitacoesModel} from "../../models/solicitacoes.model";
import {RequestsService} from "../../services/requests.service";
import {MatDialog} from "@angular/material/dialog";
import {CriarSolicitacaoComponent} from "./criar-solicitacao/criar-solicitacao.component";
import {VisualizarSolicitacaoComponent} from "./visualizar-solicitacao/visualizar-solicitacao.component";


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {

  table!: MatTable<any>
  displayedColumns: string[] = ['acao', 'escola', 'data'];
  dataSource: any[] = []
  solicitacoes: SolicitacoesModel[] = [];
  solicitacao: SolicitacoesModel = {} as SolicitacoesModel;

  constructor(
    private requestsService: RequestsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listRequests();
    this.dataSource = [];
  }

  listRequests(): void {
    this.requestsService.read().subscribe((data) => {
      this.solicitacoes = data;
      console.log(this.solicitacoes);
    })
  }

  createRequest(solicitacao: SolicitacoesModel): void {
    const dialogRef = this.dialog.open(CriarSolicitacaoComponent, {
      width: '70%',
      data: solicitacao,
    })

    dialogRef.afterClosed().subscribe(() => {

    })
  }

  openRequest(solicitacao: SolicitacoesModel) {
    const dialogRef = this.dialog.open(VisualizarSolicitacaoComponent, {
      width: '70%',
      data: solicitacao,
    })

    dialogRef.afterClosed().subscribe(() => {

    })
  }
}
