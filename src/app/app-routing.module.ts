import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "form", component: FormulaireComponent}, 
  {path: "form2", component: Formulaire2Component}, 

  {path: "404", component: NotFoundComponent}, 
  {path: "users", component: UsersComponent}, 
  {path: "users/:userId", component: UserComponent}, 
  // Tjs a placer en dernier sinon les routes ne seront pas atteintes
  {path: "**", redirectTo:'/404'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
