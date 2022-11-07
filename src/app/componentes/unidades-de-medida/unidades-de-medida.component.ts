import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UnidadesDeMedidaAdicionarOuEditarComponent } from './unidades-de-medida-adicionar-ou-editar/unidades-de-medida-adicionar-ou-editar.component';
import {ProdutosService} from "../../services/produtos.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {UnidadesDeMedidaModel} from "../../models/unidades-de-medida.model";
import {ExcluirUnidadeDeMedidaComponent} from "./unidades-de-medida-excluir/unidades-de-medida-excluir.component";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-produtos',
  templateUrl: './unidades-de-medida.component.html',
  styleUrls: ['./unidades-de-medida.component.css'],
})
export class UnidadesDeMedidaComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'unidade', 'descricao', 'acoes'];
  unidadesDeMedida: UnidadesDeMedidaModel[] = [];
  dataSource!: MatTableDataSource<UnidadesDeMedidaModel[]>
  unidadeDeMedida: UnidadesDeMedidaModel = {} as UnidadesDeMedidaModel;

  constructor(
    public dialog: MatDialog,
    private produtosService: ProdutosService,
    ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.produtosService.readMeasurementUnities().subscribe((data) => {
      this.unidadesDeMedida = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addProduct(unidadeDeMedida: UnidadesDeMedidaModel | null): void {
    const dialogRef = this.dialog.open(UnidadesDeMedidaAdicionarOuEditarComponent, {
      width: '70%',
      data: unidadeDeMedida,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts();
    });
  }

  editProduct(unidadeDeMedida: UnidadesDeMedidaModel): void {
    this.addProduct(unidadeDeMedida);
  }

  deleteProduct(unidadeDeMedida: UnidadesDeMedidaModel): void {
    const dialogRef = this.dialog.open(ExcluirUnidadeDeMedidaComponent, {
      width: '30%',
      data: unidadeDeMedida,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
