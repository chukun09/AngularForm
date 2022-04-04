import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Person } from '../classes/person';
@Injectable({
    providedIn: 'root'
})
export class VoterService {
    httpOptions = {
        headers: new HttpHeaders({
            'responseType': 'text',
        })
    };

    constructor(private http: HttpClient) { }
    loginWithGoogle(): any {
        let url = 'https://localhost:44311/api/TokenAuth/LoginWithGoogle';
     this.http.get(url);
    }
}
