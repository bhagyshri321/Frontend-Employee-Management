import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';

import { RouterModule,  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { error } from 'console';



@Component({
  selector: 'app-employee',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
name:string="";
  department:string="";
  salary:number=0;
  employees:any=[];
  
 ngOnInit(){
  this.loadEmployees();
}
constructor(private employeeService:EmployeeService,private router:Router){}

  
loadEmployees(){
this.employeeService.getEmployees().subscribe({ 
  next:(res:any)=>{
    
console.log("FULL RESPONSE", res);
console.log("TYPE", typeof res);
    this.employees=res;
    
  },
  error:(err)=>{
    console.error(err);
    }
});

}



isAdmin(){
    return localStorage.getItem('role');
}

deleteEmployee(i:number){
  this.employees.splice(i,1);
}

}
