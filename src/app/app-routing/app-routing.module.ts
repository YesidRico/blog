import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CursosComponent } from '../cursos/cursos.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const approutes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'inicio', component: HomeComponent},
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
