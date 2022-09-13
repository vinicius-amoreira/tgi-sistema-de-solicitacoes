import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./componentes/dashboard/dashboard.component";
import {ProdutosComponent} from "./componentes/produtos/produtos.component";
import {SolicitacoesComponent} from "./componentes/solicitacoes/solicitacoes.component";
import {AdicionarRetirarComponent} from "./componentes/adicionar-retirar/adicionar-retirar.component";
import {HistoricoComponent} from "./componentes/historico/historico.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
        path: 'solicitacoes',
        component: SolicitacoesComponent,
      },
      {
        path: 'adicionar-retirar',
        component: AdicionarRetirarComponent,
      },
      {
        path: 'historico',
        component: HistoricoComponent,
      },
      {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
