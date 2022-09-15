import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./componentes/dashboard/dashboard.component";
import {ProdutosComponent} from "./componentes/produtos/produtos.component";
import {HistoricoComponent} from "./componentes/historico/historico.component";
import {MainComponent} from "./componentes/main/main.component";
import {EscolasComponent} from "./componentes/escolas/escolas.component";

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
        path: 'historico',
        component: HistoricoComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
