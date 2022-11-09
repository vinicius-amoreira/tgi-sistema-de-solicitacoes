import {Component, OnInit, ViewChild} from '@angular/core';
import {ProdutosModel} from "../../models/produtos.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {SolicitacoesModel} from "../../models/solicitacoes.model";
import {RequestsService} from "../../services/requests.service";
import {MatDialog} from "@angular/material/dialog";
import {CriarSolicitacaoComponent} from "./criar-solicitacao/criar-solicitacao.component";
import {VisualizarSolicitacaoComponent} from "./visualizar-solicitacao/visualizar-solicitacao.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['acao', 'escola', 'data'];
  dataSource!: MatTableDataSource<SolicitacoesModel[]>
  solicitacoes: SolicitacoesModel[] = [];
  solicitacao: SolicitacoesModel = {} as SolicitacoesModel;

  constructor(
    private requestsService: RequestsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listRequests();
  }

  listRequests(): void {
    this.requestsService.read().subscribe((data) => {
      this.solicitacoes = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  createRequest(solicitacao: SolicitacoesModel): void {
    const dialogRef = this.dialog.open(CriarSolicitacaoComponent, {
      width: '70%',
      data: solicitacao,
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listRequests();
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
