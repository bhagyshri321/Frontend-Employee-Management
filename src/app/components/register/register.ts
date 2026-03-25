import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


   name="";
    password = "";
  
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    register() {

      const user= {
      name:this.name,
        password:this.password
      };
  
      this.authService.register(user).subscribe({
       next: ()=>{
     alert("Registration Successful");
  
      this.router.navigate(['/login']);
        },
        error:()=>{
        alert("Registrtion Failed")
        }

      });
  
    } 
    
}
