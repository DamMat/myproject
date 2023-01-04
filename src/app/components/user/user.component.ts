import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  // Service qui permet de recupere le parametre 
  // ds la route appele
  constructor(private route: ActivatedRoute) {}

  // methode du cycle de vie d un composant
  // methode appelle a l initialisation du composant
  
  ngOnInit() {
    // Methode synchrone
    const id = this.route.snapshot.params["userId"];
    console.log(id); 
  }
}
