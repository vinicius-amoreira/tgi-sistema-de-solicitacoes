import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from "ngx-webstorage";
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

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
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from "@angular/material/select";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSortModule } from "@angular/material/sort";

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MainComponent } from './componentes/main/main.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoAdicionarOuEditarComponent } from './componentes/produtos/produto-adicionar-ou-editar/produto-adicionar-ou-editar.component';
import { ExcluirProdutoComponent } from './componentes/produtos/produto-excluir/produto-excluir.component';
import { EscolasComponent } from './componentes/escolas/escolas.component';
import { EscolaAdicionarOuEditarComponent } from './componentes/escolas/escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './componentes/escolas/escola-excluir/escola-excluir.component';

import { UnidadeEscolarAdicionarOuEditarComponent } from './componentes/escolas/unidade-escolar-adicionar-ou-editar/unidade-escolar-adicionar-ou-editar.component';
import { UnidadeEscolarExcluirComponent } from './componentes/escolas/unidade-escolar-excluir/unidade-escolar-excluir.component';
import { CriarSolicitacaoComponent } from './componentes/historico/criar-solicitacao/criar-solicitacao.component';
import { VisualizarSolicitacaoComponent } from './componentes/historico/visualizar-solicitacao/visualizar-solicitacao.component';
import { UnidadesDeMedidaComponent } from "./componentes/unidades-de-medida/unidades-de-medida.component";
import {
  UnidadesDeMedidaAdicionarOuEditarComponent
} from "./componentes/unidades-de-medida/unidades-de-medida-adicionar-ou-editar/unidades-de-medida-adicionar-ou-editar.component";
import {
  ExcluirUnidadeDeMedidaComponent
} from "./componentes/unidades-de-medida/unidades-de-medida-excluir/unidades-de-medida-excluir.component";
import {CustomPaginator} from "../helpers/customPaginatorConfiguration.helper";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    HistoricoComponent,
    SidenavComponent,
    ProdutoAdicionarOuEditarComponent,
    ExcluirProdutoComponent,
    MainComponent,
    EscolasComponent,
    EscolaAdicionarOuEditarComponent,
    EscolaExcluirComponent,
    UnidadeEscolarAdicionarOuEditarComponent,
    UnidadeEscolarExcluirComponent,
    CriarSolicitacaoComponent,
    VisualizarSolicitacaoComponent,
    UnidadesDeMedidaComponent,
    UnidadesDeMedidaAdicionarOuEditarComponent,
    ExcluirUnidadeDeMedidaComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
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
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
