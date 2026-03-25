import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

 api = "https://employee-management-8-vrf4.onrender.com/employees";

  constructor(private http: HttpClient) {}

  getEmployees() {
  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  return this.http.get(this.api, { headers });}

  addEmployee(emp:any) {
   console.log("Inside add Employee");
    return this.http.post(this.api, emp);
  }

  deleteEmployee(id:number) {
    return this.http.delete(this.api + "/" + id);
  }

 
  
}
