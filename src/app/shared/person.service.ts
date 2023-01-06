import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // L’URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:8080/persons';

  // Injecter le service HttpClient
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Person>>(this.url);
  }

  getOne(id: number) {
    return this.http.get(this.url + "/" + id)
  }

  add(p: Person) {
    return this.http.post(this.url, p);
  }

  update(id: number, p: Person) {
    return this.http.put(this.url + "/" + id, p)
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id)
  }
}
