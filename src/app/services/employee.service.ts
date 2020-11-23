import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/master-data/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:8080/api/v1/employee';

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(employee: Employee): Observable<{}> {
    return this.http.post<Employee[]>(`${this.url}/add`, employee);
  }

  updateEmployee(employee: Employee): Observable<{}> {
    return this.http.put<Employee[]>(`${this.url}/update`, employee);
  }

  removeEmployee(employeeId: string): Observable<{}> {
   return this.http.delete(`${this.url}/${employeeId}`);
  }
}
