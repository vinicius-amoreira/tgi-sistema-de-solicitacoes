import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { SolicitacoesComponent } from './componentes/solicitacoes/solicitacoes.component';
import { AdicionarRetirarComponent } from './componentes/adicionar-retirar/adicionar-retirar.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    SolicitacoesComponent,
    AdicionarRetirarComponent,
    HistoricoComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
