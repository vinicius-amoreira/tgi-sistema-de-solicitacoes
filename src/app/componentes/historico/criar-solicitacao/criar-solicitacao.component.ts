import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SolicitacoesModel} from "../../../models/solicitacoes.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";
import {ProdutosService} from "../../../services/produtos.service";
import {UnidadeEscolarModel} from "../../../models/escolas.model";
import {ProdutosModel} from "../../../models/produtos.model";

@Component({
  selector: 'app-criar-solicitacao',
  templateUrl: './criar-solicitacao.component.html',
  styleUrls: ['./criar-solicitacao.component.css']
})
export class CriarSolicitacaoComponent implements OnInit {
  unidadesEscolares: UnidadeEscolarModel[] = [];
  produtos: ProdutosModel[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: SolicitacoesModel,
    public dialogRef: MatDialogRef<CriarSolicitacaoComponent>,
    private unidadesEscolaresService: UnidadesEscolaresService,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.listProducts();
    this.listSchoolUnitites();
  }

  listSchoolUnitites(): void {
    this.unidadesEscolaresService.read().subscribe((data) => {
      this.unidadesEscolares = data;
    })
  }

  listProducts(): void {
    this.produtosService.read().subscribe((data) => {
      this.produtos = data;
    })
  }

}
