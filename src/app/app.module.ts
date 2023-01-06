import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';
import { PasswordValidatorDirective } from './password-validator.directive';
import { Formulaire2Component } from './components/formulaire2/formulaire2.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PersonComponent } from './components/person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { RPersonComponent } from './components/r-person/r-person.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    Formulaire2Component,
    ReactiveFormComponent,
    PersonComponent,
    RPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Module qui nous permet de faire des formulaires
    // de type Template-driven-form
    FormsModule,
    // 2 eme module qui nous permet de faire des formulaires
    // de type Reactive
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
