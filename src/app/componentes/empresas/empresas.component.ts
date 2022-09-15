import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Empresas } from 'src/app/models/empresas.model';

const ELEMENT_DATA: Empresas[] = [
  {id: 1, companyName: 'teste', cnpj: 40028922},
  {id: 2, companyName: 'teste', cnpj: 40028922},
  {id: 3, companyName: 'teste', cnpj: 40028922},
  {id: 4, companyName: 'teste', cnpj: 40028922},
];

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'acoes'];
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

  addCompany(element: Empresas | null): void {
    // const dialogRef = this.dialog.open(AddOrEditComponent, {
    //   width: '70%',
    //   data: element === null ? {
    //     id: '',
    //     companyName: '',
    //     cnpj: ''
    //   } :  {
    //     id: element.id,
    //     companyName: element.companyName,
    //     cnpj: element.cnpj
    //   }
    // });

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

  editCompany(element: Empresas): void {
    this.addCompany(element);
  }

  deleteCompany(element: Empresas): void {
    // const dialogRef = this.dialog.open(DeleteComponent, {
    //   width: '70%',
    // });

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
