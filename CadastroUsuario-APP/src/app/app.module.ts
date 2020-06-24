import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './Cadastro/Cadastro.component';
import { HeadComponent } from './Head/Head.component';
import { ListaCadastroComponent } from './ListaCadastro/ListaCadastro.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
   declarations: [
      AppComponent,
      CadastroComponent,
      HeadComponent,
      ListaCadastroComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
