import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {Department} from "../models/department";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get<any>("../assets/sample-data.json")
      .pipe(map(response => response.employees));
  }

  getDepartments(): Observable<Array<Department>> {
    return this.http.get<any>("../assets/sample-data.json")
      .pipe(map(response => response.departments));
  }
}
