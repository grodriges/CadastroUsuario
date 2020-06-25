import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './Cadastro/Cadastro.component';
import { HeadComponent } from './Head/Head.component';
// import { ListaCadastroComponent } from './ListaCadastro/ListaCadastro.component';
import { FooterComponent } from './Footer/Footer.component';

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableStickyColumnsExample } from './ListaCadastro/ListaCadastro.component';
@NgModule({
   declarations: [
      AppComponent,
      CadastroComponent,
      HeadComponent,
      // ListaCadastroComponent,
      TableStickyColumnsExample,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatTableModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatSidenavModule,
      MatSliderModule,
      MatToolbarModule,
      MatListModule,
      MatIconModule
   ],
   exports: [
      MatInputModule,
      MatTableModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatSidenavModule,
      MatSliderModule,
      MatToolbarModule,
      MatListModule,
      MatIconModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
