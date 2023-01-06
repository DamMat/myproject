import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/forms/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/forms/user/user.component';
import { UsersComponent } from './components/forms/users/users.component';
import { Formulaire2Component } from './components/forms/formulaire2/formulaire2.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { PersonComponent } from './components/forms/person/person.component';
import { RPersonComponent } from './components/forms/r-person/r-person.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "form", component: FormulaireComponent}, 
  {path: "form2", component: Formulaire2Component}, 
  {path: "reactive", component: ReactiveFormComponent}, 
  {path: "person", component: PersonComponent}, 
  {path: "person/:personId", component: UserComponent}, 
  {path: "rperson", component: RPersonComponent},  
  {path: "users", component: UsersComponent}, 
  {path: "users/:userId", component: UserComponent}, 

  {path: "404", component: NotFoundComponent}, 
  // Tjs a placer en dernier sinon les routes ne seront pas atteintes
  {path: "**", redirectTo:'/404'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
