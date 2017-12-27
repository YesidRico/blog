import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CursosComponent } from '../cursos/cursos.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AcercaMiComponent } from '../acerca-mi/acerca-mi.component';

const approutes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'sobre-mi', component: AcercaMiComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(approutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
