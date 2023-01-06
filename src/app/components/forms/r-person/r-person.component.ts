import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/shared/person.service';


@Component({
  selector: 'app-r-person',
  templateUrl: './r-person.component.html',
  styleUrls: ['./r-person.component.css']
})
export class RPersonComponent {

  personForm: FormGroup;
  persons: Person[] = [];
  person: Person = {};

  constructor(fb: FormBuilder, private personService: PersonService) {
    this.getAll();
    this.personForm = fb.group({
      id: fb.control(""),
      firstName: fb.control(""),
      lastName: fb.control(""),
      age: fb.control("")
    });
  }

  getAll() {
    this.personService.getAll().subscribe(res => {
      this.persons = res;
      console.log(res);
    })
  }

  add() {
    if(this.personForm.controls['id'].value !== null){
      this.personService.update(this.personForm.controls['id'].value, this.personForm.value).subscribe(res => {
        this.getAll();
        this.personForm.reset();
      })
    } else {
      this.personService.add(this.personForm.value).subscribe(res => {
        this.getAll();
        this.personForm.reset();
      })   
    }     
  }

  delete(id: number) {
    this.personService.delete(id).subscribe(data => {
      this.getAll();
    })   
  }

  get(id: number) {
    this.personService.getOne(id).subscribe(res => {
      this.person = res;
      this.getAll();
      console.log(this.person);
      this.personForm.patchValue({
        id: this.person.id,
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        age: this.person.age
      })
    })
  }

}
