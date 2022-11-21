import {Component, OnInit, ViewChild} from '@angular/core';
import { single, multi } from '../../data'
import {ProdutosService} from "../../services/produtos.service";
import {ProdutosModel} from "../../models/produtos.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {GetLastYears} from "../../../helpers/getLastYears.helper"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['produto', 'quantidade', 'quantidade_min'];
  dataSource!: MatTableDataSource<any[]>
  produtos: ProdutosModel[] = [];
  lowStockProducts: any[] = [];
  single: any[] = [];
  multi: any[] = [];
  lastHundredYears: number[] = GetLastYears(100);

  view: [number, number] = [1280, 500];

// options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Quantidade';

  constructor(
    private produtosService: ProdutosService,
  ) {
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
    this.readLowStockProducts();
    this.listProducts();
    this.lastHundredYears.reverse();
  }

  readLowStockProducts(): void {
    this.produtosService.readLowStock().subscribe((data) => {
      this.lowStockProducts = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
    })
  }

  listProducts(): void {
    this.produtosService.read().subscribe((data) => {
      this.produtos = data;
    })
  }

}
