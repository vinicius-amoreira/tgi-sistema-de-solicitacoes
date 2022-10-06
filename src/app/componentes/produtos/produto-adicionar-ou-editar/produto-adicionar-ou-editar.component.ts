import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';
import {UnidadesDeMedidaModel} from "../../../models/unidades-de-medida.model";
import {ProdutosService} from "../../../services/produtos.service";

@Component({
  selector: 'app-produto-adicionar-ou-editar',
  templateUrl: './produto-adicionar-ou-editar.component.html',
  styleUrls: ['./produto-adicionar-ou-editar.component.css']
})
export class ProdutoAdicionarOuEditarComponent implements OnInit {
  unities: UnidadesDeMedidaModel[] = [];
  editMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProdutosModel,
    public dialogRef: MatDialogRef<ProdutoAdicionarOuEditarComponent>,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.loadMeasurementUnities();
    this.editMode = !!this.data.id;
  }

  loadMeasurementUnities(): void {
    this.produtosService.readMeasurementUnities().subscribe((data) => {
      this.unities = data;
    })
  }

  createOrEditProduct(payload: ProdutosModel): void {
    const formattedPayload = {
      unit: {
        id: payload.unit.id
      },
      id: payload.id,
      name: payload.name,
      description: payload.description,
      image_url: payload.image,
      quantity: payload.stock.quantity,
      quantity_min: payload.stock.quantity_min,
    } as unknown as ProdutosModel
    if(this.editMode) {
      this.produtosService.update(formattedPayload).subscribe(() => {
        console.log('foi')
      }, () => {
        console.log('nao foi')
      })
    } else {
      this.produtosService.create(formattedPayload).subscribe(() => {
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
