import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EscolasModel } from 'src/app/models/escolas.model';
import { EscolaAdicionarOuEditarComponent } from './escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './escola-excluir/escola-excluir.component';
import {EscolasService} from "../../services/escolas.service";


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'nomeUnidade', 'endereco', 'telefone', 'acoes'];
  escolas: EscolasModel[] = [];

  constructor(
    public dialog: MatDialog,
    private escolasService: EscolasService,
    // public vehiclesService: VehiclesService,
    ) {
      // this.vehiclesService.getElements()
      //   .subscribe((data: any) => {
        //     this.dataSource = data.data;
        //   });
      }

      ngOnInit(): void {
        this.listSchools();
      }

  listSchools(): void {
    this.escolasService.read().subscribe((data) => {
      this.escolas = data;
      console.log(this.escolas);
    })
  }

  // addSchools(element: EscolasModel | null): void {
  //   const dialogRef = this.dialog.open(EscolaAdicionarOuEditarComponent, {
  //     width: '70%',
  //     data: element === null ? {
  //       id: '',
  //       name: '',
  //       unidadeName: '',
  //       address: '',
  //       celphone: ''
  //
  //     } :  {
  //       id: element.id,
  //       name: element.name,
  //       unidadeName: element.unidadeName,
  //       address: element.address,
  //       celphone: element.celphone
  //     }
  //   });
  //
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   if (result !== undefined) {
  //   //     if ('id' in result) {
  //   //       this.vehiclesService.editElements(result)
  //   //         .subscribe((data: any) => {
  //   //           const index = this.dataSource.findIndex(i => i.id === data.id)
  //   //           this.dataSource[index] = data;
  //   //           this.table.renderRows();
  //   //         })
  //   //     } else {
  //   //       this.vehiclesService.createElements(result)
  //   //       .subscribe((data: any) => {
  //   //         this.dataSource.push(data.data);
  //   //         this.table.renderRows();
  //   //       });
  //   //     }
  //   //   }
  //   // });
  // }
  //
  // editSchools(element: EscolasModel): void {
  //   this.addSchools(element);
  // }
  //
  // deleteSchools(element: EscolasModel): void {
  //   const dialogRef = this.dialog.open(EscolaExcluirComponent, {
  //     width: '70%',
  //   });
  //
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   if (result !== undefined) {
  //   //     this.vehiclesService.deleteElement(element)
  //   //       .subscribe(() => {
  //   //         this.dataSource = this.dataSource.filter(i => i.id !== element.id);
  //   //         this.table.renderRows();
  //   //       });
  //   //   }
  //   // });
  // }

}
