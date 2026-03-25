import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet,Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth-service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee_frontend');

  constructor(private authService:AuthService, private router:Router){

    if(authService.isLoggedIn()){
router.navigate(['/employee']);
  }
  else{
    router.navigate(['/login']);
  }
  }

  

}
