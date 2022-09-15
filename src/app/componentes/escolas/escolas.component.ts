import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Escolas } from 'src/app/models/escolas.model';
import { EscolaExcluirComponent } from './escola-excluir/escola-excluir.component';

const ELEMENT_DATA: Escolas[] = [
  {id: 1, name: 'teste'},
  {id: 2, name: 'teste'},
  {id: 3, name: 'teste'},
  {id: 4, name: 'teste'},
];

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
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

  addSchools(element: Escolas | null): void {
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

  editSchools(element: Escolas): void {
    this.addSchools(element);
  }

  deleteSchools(element: Escolas): void {
    const dialogRef = this.dialog.open(EscolaExcluirComponent, {
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
