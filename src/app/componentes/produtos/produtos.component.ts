import { Component, OnInit,  ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';
import { ProdutoAdicionarOuEditarComponent } from './produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExculirProdutoComponent } from './produto-excluir/produto-excluir.component';
import {ProdutosService} from "../../services/produtos.service";

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
    })
  }

  addProduct(produto: ProdutosModel | null): void {
    const dialogRef = this.dialog.open(ProdutoAdicionarOuEditarComponent, {
      width: '70%',
      data: produto === null ? {
        id: '',
        name: '',
        description: '',
        quantity: ''
      } :  {
        id: produto.id,
        name: produto.name,
        description: produto.description,
        quantity: produto.stock.quantity,
      }
    });

    console.log(produto);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

      }
    });
  }

  editProduct(produto: ProdutosModel): void {
    this.addProduct(produto);
  }

  deleteProduct(element: ProdutosModel): void {
    const dialogRef = this.dialog.open(ExculirProdutoComponent, {
      width: '70%',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined) {
    //     this.vehiclesService.deleteElement(element)
    //       .subscribe(() => {
    //         this.dataSource = this.dataSource.filter(i => i.id !== element.id);
    //         this.table.renderRows();
    //       });
    //   }
    // });
  }
}
