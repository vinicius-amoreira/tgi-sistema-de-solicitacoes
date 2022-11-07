import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { ProdutosComponent } from "./componentes/produtos/produtos.component";
import { HistoricoComponent } from "./componentes/historico/historico.component";
import { MainComponent } from "./componentes/main/main.component";
import { EscolasComponent } from "./componentes/escolas/escolas.component";
import {UnidadesDeMedidaComponent} from "./componentes/unidades-de-medida/unidades-de-medida.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
      {
        path: 'escolas',
        component: EscolasComponent,
      },
      {
        path: 'solicitacoes',
        component: HistoricoComponent,
      },
      {
        path: 'unidades-de-medida',
        component: UnidadesDeMedidaComponent,
      },
      {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
