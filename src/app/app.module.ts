import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {AngularMaterialModule} from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import {MediaMatcher} from '@angular/cdk/layout';
import { HomeComponent} from './home/home.component';
import {CardPresentationComponent} from './home/card-presentation.component';
import { HeaderComponent } from './header/header.component';


import {AppRoutingModule} from './app-routing/app-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AcercaMiComponent } from './acerca-mi/acerca-mi.component';
import { CardPromocionalComponent } from './card-promocional/card-promocional.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardPresentationComponent,
    CursosComponent,
    PageNotFoundComponent,
    AcercaMiComponent,
    CardPromocionalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
