import { Component, OnInit } from '@angular/core';
import { single } from '../../data'
import {ProdutosService} from "../../services/produtos.service";
import {ProdutosModel} from "../../models/produtos.model";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lowStockProducts: ProdutosModel[] = [];
  single: any[] = [];
  multi: any[] = [];

  view: [number, number] = [1280, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Total de itens';

  constructor(
    private produtosService: ProdutosService,
  ) {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
    this.readLowStockProducts();
  }

  onSelect(event: any) {
    console.log(event);
  }

  readLowStockProducts(): void {
    this.produtosService.readLowStock().subscribe((data) => {
      this.lowStockProducts = data;
      console.log(data);
    })
  }

}
