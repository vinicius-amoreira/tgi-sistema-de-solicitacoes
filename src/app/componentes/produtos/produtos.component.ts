import { Component, OnInit,  ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutoAdicionarOuEditarComponent } from './produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExculirProdutoComponent } from './produto-excluir/produto-excluir.component';

const ELEMENT_DATA: Produtos[] = [
  {id: 1, name: 'teste', entry: 'teste', exit: 'teste'},
  {id: 2, name: 'teste', entry: 'teste', exit: 'teste'},
  {id: 3, name: 'teste', entry: 'teste', exit: 'teste'},
  {id: 4, name: 'teste', entry: 'teste', exit: 'teste'},
];
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'entrada', 'saida', 'acoes'];
  dataSource: any[]

  constructor(
    public dialog: MatDialog,
    // public vehiclesService: VehiclesService,
    ) {
      // this.vehiclesService.getElements()
      //   .subscribe((data: any) => {
        //     this.dataSource = data.data;
        //   });
        this.dataSource = ELEMENT_DATA;
      }

      ngOnInit(): void {
  }

  addProduct(element: Produtos | null): void {
    const dialogRef = this.dialog.open(ProdutoAdicionarOuEditarComponent, {
      width: '70%',
      data: element === null ? {
        id: '',
        name: '',
        entry: '',
        exit: '',
      } :  {
        id: element.id,
        name: element.name,
        entry: element.entry,
        exit: element.exit,
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined) {
    //     if ('id' in result) {
    //       this.vehiclesService.editElements(result)
    //         .subscribe((data: any) => {
    //           const index = this.dataSource.findIndex(i => i.id === data.id)
    //           this.dataSource[index] = data;
    //           this.table.renderRows();
    //         })
    //     } else {
    //       this.vehiclesService.createElements(result)
    //       .subscribe((data: any) => {
    //         this.dataSource.push(data.data);
    //         this.table.renderRows();
    //       });
    //     }
    //   }
    // });
  }

  editProduct(element: Produtos): void {
    this.addProduct(element);
  }

  deleteProduct(element: Produtos): void {
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
