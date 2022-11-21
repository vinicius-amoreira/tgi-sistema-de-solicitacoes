import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';
import { ProdutoAdicionarOuEditarComponent } from './produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExcluirProdutoComponent } from './produto-excluir/produto-excluir.component';
import {ProdutosService} from "../../services/produtos.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'quantidade', 'acoes'];
  produtos: ProdutosModel[] = [];
  dataSource!: MatTableDataSource<ProdutosModel[]>
  produto: ProdutosModel = {
    name: '',
    description: '',
    image: '',
    unit: {
      unit: '',
      description: '',
    },
    stock: {
      quantity: null,
      quantity_min: null,
    }
  };

  constructor(
    public dialog: MatDialog,
    private produtosService: ProdutosService,
    ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.produtosService.read().subscribe((data) => {
      this.produtos = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addProduct(produto: ProdutosModel | null): void {
    const dialogRef = this.dialog.open(ProdutoAdicionarOuEditarComponent, {
      width: '70%',
      data: produto,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts();
    });
  }

  editProduct(produto: ProdutosModel): void {
    const dialogRef = this.dialog.open(ProdutoAdicionarOuEditarComponent, {
      width: '70%',
      data: produto,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts();
    });
  }

  deleteProduct(produto: ProdutosModel): void {
    const dialogRef = this.dialog.open(ExcluirProdutoComponent, {
      width: '30%',
      data: produto,
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
