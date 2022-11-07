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
import { ExcluirProdutoComponent } from './componentes/produtos/produto-excluir/produto-excluir.component';
import { EscolasComponent } from './componentes/escolas/escolas.component';
import { EscolaAdicionarOuEditarComponent } from './componentes/escolas/escola-adicionar-ou-editar/escola-adicionar-ou-editar.component';
import { EscolaExcluirComponent } from './componentes/escolas/escola-excluir/escola-excluir.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { UnidadeEscolarAdicionarOuEditarComponent } from './componentes/escolas/unidade-escolar-adicionar-ou-editar/unidade-escolar-adicionar-ou-editar.component';
import { UnidadeEscolarExcluirComponent } from './componentes/escolas/unidade-escolar-excluir/unidade-escolar-excluir.component';
import { CriarSolicitacaoComponent } from './componentes/historico/criar-solicitacao/criar-solicitacao.component';
import { VisualizarSolicitacaoComponent } from './componentes/historico/visualizar-solicitacao/visualizar-solicitacao.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {UnidadesDeMedidaComponent} from "./componentes/unidades-de-medida/unidades-de-medida.component";
import {
  UnidadesDeMedidaAdicionarOuEditarComponent
} from "./componentes/unidades-de-medida/unidades-de-medida-adicionar-ou-editar/unidades-de-medida-adicionar-ou-editar.component";
import {
  ExcluirUnidadeDeMedidaComponent
} from "./componentes/unidades-de-medida/unidades-de-medida-excluir/unidades-de-medida-excluir.component";
import {MatSortModule} from "@angular/material/sort";

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
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
