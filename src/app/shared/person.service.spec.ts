import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';
import { Person } from '../interfaces/person';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  // methode appele avant chaque test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // injection des service
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('#getAll', () => {
    it('should return an Observable<Person[]>', () => {
      
      const dummyPersons: Array<Person>  = [
        { id: 1, firstName: 'Doe', lastName:'John' },
        { id: 1, firstName: 'Doe', lastName:'John' },
      ];
  
      service.getAll().subscribe(persons => {
        expect(persons.length).toBe(2);
        expect(persons).toEqual(dummyPersons);
      });
  
      // simule les requêtes
      const req = httpMock.expectOne(`http://localhost:8080/persons`);
      expect(req.request.method).toBe("GET");
      // fournit des valeurs factices comme réponses
      req.flush(dummyPersons);
    });
  });

  describe('#add', () => {
    it('should return an Observable<Person>', () => {

      const dummyPerson: Person= {id: 1, firstName: 'Doe', lastName:'John'};

      service.add(dummyPerson).subscribe(person => {
        expect(person.lastName).toBe('John');
        expect(person).toEqual(person);
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyPerson);
    });
  });

  describe('#getOne', () => {
    it('should return an Observable<Person>', () => {

      const dummyPerson: Person= {id: 2, firstName: 'Doe', lastName:'John'};

      service.getOne(2).subscribe(person => {
        expect(person.lastName).toBe('John');
        expect(person).toEqual(dummyPerson);
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/2`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyPerson);
    });
  });

  describe('#update', () => {
    it('should return an Observable<Person>', () => {

      const dummyPerson: Person= {id: 1, firstName: 'Doe', lastName:'John'};

      service.update(1, dummyPerson).subscribe(person => {
        expect(person).toEqual(dummyPerson);
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/1`);
      expect(req.request.method).toBe("PUT");
      req.flush(dummyPerson);
    });
  });

  describe('#delete', () => {
    it('should return an Observable<number>', () => {

      const dummyPerson: Person = {id: 1, firstName: 'Doe', lastName:'John'};

      service.delete(1).subscribe(person => {
        expect(person.id).toBe(dummyPerson.id);
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/1`);
      expect(req.request.method).toBe("DELETE");
      req.flush(dummyPerson);
    });
  });

});
