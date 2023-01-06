import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userForm: FormGroup;
  users: any[] = [];

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      login: fb.control("",[Validators.required, this.checkValidator]),
      password: fb.control("",[Validators.required])
    });
  }

  register() {
    console.log(this.userForm.value);
    this.users.push(this.userForm.value);
    this.users.forEach(element => {
      console.log(element);
    });
    this.userForm.reset;
  }

  checkValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'error' };
    }
  }

  delete(obj: any) {
    const index: number = this.users.indexOf(obj);
    this.users.splice(index, 1);
  }

}
