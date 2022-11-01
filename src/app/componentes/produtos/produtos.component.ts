import { Component, OnInit,  ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';
import { ProdutoAdicionarOuEditarComponent } from './produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExcluirProdutoComponent } from './produto-excluir/produto-excluir.component';
import {ProdutosService} from "../../services/produtos.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'quantidade', 'acoes'];
  dataSource: ProdutosModel[];
  produtos: ProdutosModel[] = [];
  pageSlice: ProdutosModel[] = [];
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
    // public vehiclesService: VehiclesService,
    ) {
      // this.vehiclesService.getElements()
      //   .subscribe((data: any) => {
        //     this.dataSource = data.data;
        //   });
        this.dataSource = this.produtos;
      }

      ngOnInit(): void {
        this.listProducts();
      }

  listProducts(): void {
    this.produtosService.read().subscribe((data) => {
      this.produtos = data;
      this.pageSlice = this.produtos.slice(0, 25);
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
    this.addProduct(produto);
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

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.produtos.length){
      endIndex = this.produtos.length;
    }
    this.pageSlice = this.produtos.slice(startIndex, endIndex);
  }
}
