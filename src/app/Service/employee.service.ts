import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Url ="https://localhost:7056/api/Student";
  constructor(private http:HttpClient) { }

  GetData(){
    return this.http.get(this.Url)
  }
}
