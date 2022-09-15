import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MatInputModule } from "@angular/material/input";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddOrEditComponent } from './componentes/produtos/add-or-edit/add-or-edit.component';
import { DeleteComponent } from './componentes/produtos/delete/delete.component';
import { MainComponent } from './componentes/main/main.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { CompanyDeleteComponent } from './componentes/empresas/company-delete/company-delete.component';
import { CompanyAddOrEditComponent } from './componentes/empresas/company-add-or-edit/company-add-or-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    HistoricoComponent,
    SidenavComponent,
    AddOrEditComponent,
    DeleteComponent,
    MainComponent,
    EmpresasComponent,
    CompanyDeleteComponent,
    CompanyAddOrEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
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
