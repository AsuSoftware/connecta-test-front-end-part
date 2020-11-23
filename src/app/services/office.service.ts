import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offices } from '../model/master-data/offices';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

url = 'http://localhost:8080/api/v1/offices';
constructor(private http: HttpClient) { }

createOffice(office: Offices): Observable<{}> {
  return this.http.post<Offices>(this.url, office);
}

getAllOffices(): Observable<Offices[]> {
  return this.http.get<Offices[]>(this.url);
}

updateOffice(id: string, office: Offices): Observable<{}> {
  return this.http.put<Offices>(`${this.url}/${id}`, office);
}

deleteOffice(id: string): Observable<{}> {
  return this.http.delete(`${this.url}/${id}`);
}

}
