import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {SolicitacoesModel} from "../../models/solicitacoes.model";
import {RequestsService} from "../../services/requests.service";
import {MatDialog} from "@angular/material/dialog";
import {CriarSolicitacaoComponent} from "./criar-solicitacao/criar-solicitacao.component";
import {VisualizarSolicitacaoComponent} from "./visualizar-solicitacao/visualizar-solicitacao.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['acao', 'escola', 'data' ];
  dataSource!: MatTableDataSource<SolicitacoesModel>;
  solicitacoes: SolicitacoesModel[] = [];
  solicitacao: SolicitacoesModel = {} as SolicitacoesModel;
  dateForm!: FormGroup;

  constructor(
    private requestsService: RequestsService,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.listRequests();
    this.buildFilterDateForm();
  }

  buildFilterDateForm(): void {
    this.dateForm = this.fb.group({
      "start_date": [null, [Validators.required]],
      "end_date": [null, [Validators.required]]
    })
  }

  listRequests(): void {
    this.requestsService.read().subscribe((data) => {
      this.solicitacoes = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data, filter: string)  => {
        const accumulator = (currentTerm: any, key: string) => {
          return this.nestedFilterCheck(currentTerm, data, key);
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };
    })
  }

  nestedFilterCheck(search: any, data: any, key: string) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  createRequest(solicitacao: SolicitacoesModel): void {
    const dialogRef = this.dialog.open(CriarSolicitacaoComponent, {
      width: '70%',
      data: solicitacao,
    })

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.listRequests();
      }, 1000)
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

  listByDateInterval(payload: any) {
    const startDate: Date = payload.value.start_date;
    const endDate: Date = payload.value.end_date;
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    this.requestsService.filterByDateInterval(formattedStartDate, formattedEndDate).subscribe((data) => {
      this.solicitacoes = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
