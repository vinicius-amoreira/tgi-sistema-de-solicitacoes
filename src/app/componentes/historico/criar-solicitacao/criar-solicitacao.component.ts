import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SolicitacoesModel} from "../../../models/solicitacoes.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";
import {ProdutosService} from "../../../services/produtos.service";
import {UnidadeEscolarModel} from "../../../models/escolas.model";
import {ProdutosModel} from "../../../models/produtos.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-criar-solicitacao',
  templateUrl: './criar-solicitacao.component.html',
  styleUrls: ['./criar-solicitacao.component.css']
})
export class CriarSolicitacaoComponent implements OnInit {
  unidadesEscolares: UnidadeEscolarModel[] = [];
  produtos: ProdutosModel[] = [];

  requestsForm: FormGroup = this.fb.group({
    schoolUnit: this.fb.group({
      id: [null, Validators.required],
    }),
    requestAction: this.fb.group({
      id: [null, Validators.required]
    }),
    requestItems: this.fb.array([this.createRequestItems()])
  })

  acoes = [
    {
      id: 1,
      action: "Entrada",
    },
    {
      id: 2,
      action: "Saída",
    }
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: SolicitacoesModel,
    public dialogRef: MatDialogRef<CriarSolicitacaoComponent>,
    private unidadesEscolaresService: UnidadesEscolaresService,
    private produtosService: ProdutosService,
    private fb: FormBuilder,
    public requestsService: RequestsService,
  ) { }

  ngOnInit(): void {
    this.listProducts();
    this.listSchoolUnitites();
  }

  createRequestItems(): FormGroup {
    return this.fb.group({
      material: this.fb.group({
        id: [null, Validators.required]
      }),
      quantity: [null, Validators.required],
    })
  }

  get requestItem() {
    return <FormArray>this.requestsForm.get('requestItems')
  }

  addRequestItem() {
    this.requestItem.push(this.createRequestItems())
  }

  removeOrClearRequestItem(i: number): void {
    if(this.requestItem.length > 1) {
      this.requestItem.removeAt(i);
    } else {
      this.requestItem.reset();
    }
  }

  listSchoolUnitites(): void {
    this.unidadesEscolaresService.read().subscribe((data) => {
      this.unidadesEscolares = data.sort((a, b) => a.name.localeCompare(b.name));
    })
  }

  listProducts(): void {
    this.produtosService.read().subscribe((data) => {
      this.produtos = data.sort((a, b) => a.name.localeCompare(b.name));
    })
  }

  onNoClick() {
    this.dialogRef.close()
  }

  saveRequestItem() {
    this.requestsService.create(this.requestsForm.value).subscribe()
  }

  changeAction(event: any) {
    if(event === 1) {
      this.requestsForm.get('schoolUnit')?.disable();
      this.requestsForm.patchValue({
        schoolUnit: {
          id: null
        }
      })
    } else {
      this.requestsForm.get('schoolUnit')?.enable();
    }
  }
}
