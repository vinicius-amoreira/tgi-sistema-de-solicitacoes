import { Component, OnInit } from '@angular/core';
import {ProdutosModel} from "../../models/produtos.model";
import {MatTable} from "@angular/material/table";


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {

  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'produto', 'qtd', 'acao', 'escola', 'data'];
  dataSource: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [];
  }

}
