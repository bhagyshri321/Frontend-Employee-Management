import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router ,RouterModule} from '@angular/router';


@Component({
  selector: 'app-main-layout',
  imports: [RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

username='';
role='';

constructor(private router:Router, private authService: AuthService){}

ngOnInit(){
  this.username = this.authService.getUsername() || '';
  this.role = this.authService.getUserRole() || '';
}

logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
