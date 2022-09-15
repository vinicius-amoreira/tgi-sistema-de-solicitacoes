import { Component, OnInit } from '@angular/core';
import {Produtos} from "../../models/produtos.model";
import {MatTable} from "@angular/material/table";

const ELEMENT_DATA: Produtos[] = [
  {id: 1, name: 'Entrada', quantity: 12 , entry: 'N/A', exit: 'Produto teste', date: '12-12-2022'},
  {id: 2, name: 'Saída', quantity: 42, entry: 'Escola teste', exit: 'Produto teste', date: '12-12-2022'},
  {id: 3, name: 'Saída', quantity: 5, entry: 'Escola teste', exit: 'Produto teste', date: '12-12-2022'},
  {id: 4, name: 'Entrada', quantity: 2, entry: 'N/A', exit: 'Produto teste', date: '12-12-2022'},
];

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
    this.dataSource = ELEMENT_DATA;
  }

}
