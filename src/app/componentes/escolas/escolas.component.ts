import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EscolasModel } from 'src/app/models/escolas.model';
import { EscolaAdicionarOuEditarComponent } from './escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './escola-excluir/escola-excluir.component';
import {EscolasService} from "../../services/escolas.service";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['nome', 'nomeUnidade', 'endereco', 'telefone', 'acoes'];
  escolas: EscolasModel[] = [];
  pageSlice: EscolasModel[] = [];

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
      this.pageSlice = this.escolas.slice(0, 10);
    })
  }

  onPageChange(event: PageEvent) {
    const paginationOptions = {
      currentPage: event.pageIndex,
      itensPerPage: event.pageSize,
    }
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.escolas.length){
      endIndex = this.escolas.length;
    }
    this.pageSlice = this.escolas.slice(startIndex, endIndex);
  }

  addOrEditSchool(escola: EscolasModel): void {
    const dialogRef = this.dialog.open(EscolaAdicionarOuEditarComponent, {
      width: '70%',
      data: escola,
    })

    dialogRef.afterClosed().subscribe(() => {
      this.listSchools();
    })
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
