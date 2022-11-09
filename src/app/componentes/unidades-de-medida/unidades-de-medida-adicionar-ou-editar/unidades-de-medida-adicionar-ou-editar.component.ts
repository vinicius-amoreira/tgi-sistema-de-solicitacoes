import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UnidadesDeMedidaModel} from "../../../models/unidades-de-medida.model";
import {ProdutosService} from "../../../services/produtos.service";

@Component({
  selector: 'app-unidades-de-medida-adicionar-ou-editar',
  templateUrl: './unidades-de-medida-adicionar-ou-editar.component.html',
  styleUrls: ['./unidades-de-medida-adicionar-ou-editar.component.css']
})
export class UnidadesDeMedidaAdicionarOuEditarComponent implements OnInit {
  editMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: UnidadesDeMedidaModel,
    public dialogRef: MatDialogRef<UnidadesDeMedidaAdicionarOuEditarComponent>,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.editMode = !!this.data.id;
  }

  createOrEditProduct(payload: UnidadesDeMedidaModel): void {
    if(this.editMode) {
      this.produtosService.updateMeasurementUnit(payload).subscribe(() => {
        console.log('foi')
      }, () => {
        console.log('nao foi')
      })
    } else {
      this.produtosService.createMeasurementUnit(payload).subscribe(() => {
        console.log('foi')
      }, () => {
        console.log('nao foi')
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
