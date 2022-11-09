import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { ProdutosComponent } from "./componentes/produtos/produtos.component";
import { HistoricoComponent } from "./componentes/historico/historico.component";
import { MainComponent } from "./componentes/main/main.component";
import { EscolasComponent } from "./componentes/escolas/escolas.component";
import { UnidadesDeMedidaComponent } from "./componentes/unidades-de-medida/unidades-de-medida.component";
import { RequestsComponent } from './componentes/requests/requests.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: {
         token: 'token'
        }
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
        canActivate: [AuthGuard],
        data: {
         token: 'token'
        }
      },
      {
        path: 'escolas',
        component: EscolasComponent,
        canActivate: [AuthGuard],
        data: {
         token: 'token'
        }
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
        path: 'requests',
        component: RequestsComponent,
        canActivate: [AuthGuard],
        data: {
         token: 'token'
        }
      },
      {
        path: 'historico',
        component: HistoricoComponent,
        canActivate: [AuthGuard],
        data: {
         token: 'token'
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
