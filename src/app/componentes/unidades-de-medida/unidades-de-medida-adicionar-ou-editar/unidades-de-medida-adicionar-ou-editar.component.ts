import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UnidadesDeMedidaModel} from "../../../models/unidades-de-medida.model";
import {ProdutosService} from "../../../services/produtos.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.editMode = !!this.data.id;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  createOrEditProduct(payload: UnidadesDeMedidaModel): void {
    if(this.editMode) {
      this.produtosService.updateMeasurementUnit(payload).subscribe(() => {
        this.showMessage("Sucesso!")
      }, () => {
        this.showMessage("Erro!", true)
      })
    } else {
      this.produtosService.createMeasurementUnit(payload).subscribe(() => {
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
