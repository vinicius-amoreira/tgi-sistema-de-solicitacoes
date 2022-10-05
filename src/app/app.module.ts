import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainComponent } from './componentes/main/main.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoAdicionarOuEditarComponent } from './componentes/produtos/produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExculirProdutoComponent } from './componentes/produtos/produto-excluir/produto-excluir.component';
import { EscolasComponent } from './componentes/escolas/escolas.component';
import { EscolaAdicionarOuEditarComponent } from './componentes/escolas/escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './componentes/escolas/escola-excluir/escola-excluir.component';
import { RequestsComponent } from './componentes/requests/requests.component';
import { AddRequestComponent } from './componentes/requests/add-request/add-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    HistoricoComponent,
    SidenavComponent,
    ProdutoAdicionarOuEditarComponent,
    ExculirProdutoComponent,
    MainComponent,
    EscolasComponent,
    EscolaAdicionarOuEditarComponent,
    EscolaExcluirComponent,
    RequestsComponent,
    AddRequestComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    NgxChartsModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
