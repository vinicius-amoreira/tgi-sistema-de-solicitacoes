import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from '../../../models/produtos.model';
import {ProdutosService} from "../../../services/produtos.service";

@Component({
  selector: 'app-unidades-de-medida-excluir',
  templateUrl: './unidades-de-medida-excluir.component.html',
  styleUrls: ['./unidades-de-medida-excluir.component.css']
})
export class ExcluirUnidadeDeMedidaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ExcluirUnidadeDeMedidaComponent>,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct(payload: ProdutosModel): void {
    this.produtosService.deleteMeasurementUnit(payload.id!).subscribe(() => {
      console.log('foi')
    }, () => {
      console.log('nao foi')
    })
    this.dialogRef.close();
  }
}
