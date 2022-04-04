import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }
  getData() {
    let url = 'https://localhost:44311/api/services/app/Person/GetPeople';
    return this.http.get(url);
  }
  deletePeople(id: number) {
    let url = 'https://localhost:44311/api/services/app/Person/DeletePerson';
    let params = new HttpParams().set('Id', id);
    return this.http.delete(url, { params });
  }
}
