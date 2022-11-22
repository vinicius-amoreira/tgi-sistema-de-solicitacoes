import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutosModel } from 'src/app/models/produtos.model';
import {UnidadesDeMedidaModel} from "../../../models/unidades-de-medida.model";
import {ProdutosService} from "../../../services/produtos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-unidades-de-medida-adicionar-ou-editar',
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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadMeasurementUnities();
    this.editMode = !!this.data.id;
  }

  loadMeasurementUnities(): void {
    this.produtosService.readMeasurementUnities().subscribe((data) => {
      this.unities = data.sort((a, b) => a.description.localeCompare(b.description));
    })
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  createOrEditProduct(payload: ProdutosModel): void {
    const formattedPayload = {
      unit: {
        id: payload.unit.id
      },
      stock: {
        id: payload.stock ? payload.stock.id : null,
        quantity_min: payload.stock ? payload.stock.quantity_min : null,
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
        this.showMessage("Sucesso!")
      }, () => {
        this.showMessage("Erro!", true)
      })
    } else {
      this.produtosService.create(formattedPayload).subscribe(() => {
        this.showMessage("Sucesso!")
      }, () => {
        this.showMessage("Erro!", true)
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
