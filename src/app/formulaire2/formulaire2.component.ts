import { Component } from '@angular/core';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component {
  login: Login = {};
  logins: Login[] = [];

  register() : void {
    console.log(this.login);  
  };
}
