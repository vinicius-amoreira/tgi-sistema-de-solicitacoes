import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {EscolasModel, UnidadeEscolarModel} from 'src/app/models/escolas.model';
import { EscolaAdicionarOuEditarComponent } from './escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './escola-excluir/escola-excluir.component';
import {EscolasService} from "../../services/escolas.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {UnidadesEscolaresService} from "../../services/unidadesEscolares.service";
import {
  UnidadeEscolarAdicionarOuEditarComponent
} from "./unidade-escolar-adicionar-ou-editar/unidade-escolar-adicionar-ou-editar.component";
import {UnidadeEscolarExcluirComponent} from "./unidade-escolar-excluir/unidade-escolar-excluir.component";


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild('schools') schoolsPaginator!: MatPaginator;
  @ViewChild('schoolUnits') schoolUnitsPaginator!: MatPaginator;
  schoolColumns: string[] = ['nome', 'acoes'];
  schoolUnitColumns: string[] = ['nome', 'nomeUnidade', 'endereco', 'telefone', 'acoes']
  unidadesEscolares: UnidadeEscolarModel[] = [];
  unidadeEscolar: UnidadeEscolarModel = {
    name: '',
    address: '',
    phone: [{phone: '', description: ''}],
    school: {
      name: ''
    },
  }
  schoolUnitsDataSource!: MatTableDataSource<UnidadeEscolarModel[]>
  escolas: EscolasModel[] = [];
  escola: EscolasModel = {} as EscolasModel;
  schoolsDataSource!: MatTableDataSource<EscolasModel[]>

  constructor(
    public dialog: MatDialog,
    private escolasService: EscolasService,
    private unidadesEscolaresService: UnidadesEscolaresService,
    ) {}

  ngOnInit(): void {
    this.listSchools();
    this.listSchoolsUnits();
  }

  listSchools(): void {
    this.escolasService.read().subscribe((data) => {
      this.escolas = data;
      this.schoolsDataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>
      this.schoolsDataSource.paginator = this.schoolsPaginator;
    })
  }

  listSchoolsUnits(): void {
    this.unidadesEscolaresService.read().subscribe((data) => {
      this.unidadesEscolares = data;
      this.schoolUnitsDataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.schoolUnitsDataSource.paginator = this.schoolUnitsPaginator;
    })
  }

  addSchool(escola: EscolasModel | null): void {
    const dialogRef = this.dialog.open(EscolaAdicionarOuEditarComponent, {
      width: '30%',
      data: escola,
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listSchools();
    })
  }

  editSchool(escola: EscolasModel): void {
    this.addSchool(escola);
  }

  deleteSchools(escola: EscolasModel): void {
    const dialogRef = this.dialog.open(EscolaExcluirComponent, {
      width: '30%',
      data: escola,
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listSchools();
    })
  }

  addOrEditSchoolUnit(unidadeEscolar: UnidadeEscolarModel): void {
    const dialogRef = this.dialog.open(UnidadeEscolarAdicionarOuEditarComponent, {
      width: '70%',
      data: unidadeEscolar
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listSchoolsUnits();
    })
  }

  deleteSchoolUnit(unidadeEscolar: UnidadeEscolarModel): void {
    const dialogRef = this.dialog.open(UnidadeEscolarExcluirComponent, {
      width: '30%',
      data: unidadeEscolar,
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listSchoolsUnits();
    })
  }

  applyFilterSchoolUnits(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.schoolUnitsDataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterSchools(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.schoolsDataSource.filter = filterValue.trim().toLowerCase();
  }
}
