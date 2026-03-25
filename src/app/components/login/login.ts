import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true
})
export class Login {

  name = "";
  password = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
 const user = {
    name: this.name,
    password: this.password
  };
   console.log("inside login ts");
  this.authService.login(this.name,this.password).subscribe({
    next: (res: any) => {
      console.log("LOGIN RESPONSE:", res);
    this.authService.setUser(res);
      this.router.navigate(['/add-employee']);
      alert("Login Successful");
    },
    error: () => {
      alert("Invalid Credentials");
    }
  });


    }}
