import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[] = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Jane', email: 'jane@gmail'},
    { id: 3, name: 'Simon', email: 'simon@gmail'},
    { id: 4, name: 'Johana', email: 'johana@gmail'},
  ];

  constructor(private router: Router) {} 

  getUserDetails(userId: number): void{
    this.router.navigate(['/users', userId]);
  }

}
