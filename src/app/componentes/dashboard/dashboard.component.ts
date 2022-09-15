import { Component, OnInit } from '@angular/core';
import { single } from '../../data'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  single: any[] = [];
  multi: any[] = [];

  view: [number, number] = [800, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Total de itens';

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
