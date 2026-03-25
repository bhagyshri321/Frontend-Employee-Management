import { Routes } from '@angular/router';
import { Employee } from './components/employee/employee';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { authGuard } from './auth-guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { AddEmployee } from './components/add-employee/add-employee';


export const routes: Routes = [
    {path:'register', component:Register},
    {path:'login', component:Login},
   
    

    {
  path: '',
  component: MainLayout,
  canActivate: [authGuard],
  children: [
    { path: 'employees', component: Employee },
    {path:'add-employee', component:AddEmployee},
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: '**', redirectTo: 'employees' }
  ]

}
];
