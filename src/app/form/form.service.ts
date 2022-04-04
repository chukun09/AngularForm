import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Person } from '../classes/person';
@Injectable({
    providedIn: 'root'
})
export class FormService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) { }
    addNewPerson(person: any) {
        let url = 'https://localhost:44311/api/services/app/Person/AddPerson';
        console.log(JSON.stringify(person));
        return this.http.post(url, person, this.httpOptions);
    }
    getPersonById(id: number) {
        let url = 'https://localhost:44311/api/services/app/Person/GetPeopleById';
        let params = new HttpParams().set('Id', id);
        return this.http.get(url, { params });
    }
    editPerson(person : any, id: number) {
        let url ='https://localhost:44311/api/services/app/Person/UpdatePerson';
        var editPersonDto = {
            id: id,
            name: person.name,
            surname: person.surName,
            emailAddress: person.emailAddress
        }
        return this.http.put(url, editPersonDto);
    }
}
