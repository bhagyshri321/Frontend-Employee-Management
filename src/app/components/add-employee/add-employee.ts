import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
name:string='';
department:string='';
salary:number=0;


constructor(private employeeService:EmployeeService){}
  
addEmployee(){
    console.log("Inside Add method");

   let emp={
  name:this.name,
  department:this.department,
  salary:this.salary
}
console.log("Emp is :", emp);
this.employeeService.addEmployee(emp).subscribe(()=>{
  //this.loadEmployees();
});
this.name="",
this.department="",
this.salary=0
}

}
