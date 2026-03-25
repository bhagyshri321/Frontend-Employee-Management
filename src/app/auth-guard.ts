import { inject } from '@angular/core';
import { CanActivateFn, Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth-service';
import { log } from 'console';


export const authGuard: CanActivateFn = (route, state) => {
  console.log("Inside auth");
  
  const router = inject(Router); 
const authservice= inject(AuthService);
  
  return authservice.isLoggedIn()
  ? true
  :router.createUrlTree(['/login']);

  
  }

  

  

