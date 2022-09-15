import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Escolas } from 'src/app/models/escolas.model';
import { EscolaAdicionarOuEditarComponent } from './escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './escola-excluir/escola-excluir.component';

const ELEMENT_DATA: Escolas[] = [
  {id: 1, name: 'teste', unidadeName: 'teste', address: 'teste', celphone: 19954687145},
  {id: 2, name: 'teste', unidadeName: 'teste', address: 'teste', celphone: 19954687145},
  {id: 3, name: 'teste', unidadeName: 'teste', address: 'teste', celphone: 19954687145},
  {id: 4, name: 'teste', unidadeName: 'teste', address: 'teste', celphone: 19954687145},
];

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'nomeUnidade', 'endereco', 'telefone', 'acoes'];
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
    const dialogRef = this.dialog.open(EscolaAdicionarOuEditarComponent, {
      width: '70%',
      data: element === null ? {
        id: '',
        name: '',
        unidadeName: '',
        address: '',
        celphone: ''

      } :  {
        id: element.id,
        name: element.name,
        unidadeName: element.unidadeName,
        address: element.address,
        celphone: element.celphone
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
