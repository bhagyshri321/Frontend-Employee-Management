import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseUrl = "https://employee-management-8-vrf4.onrender.com/user";

  constructor(private http: HttpClient) {}

  register(user:any) {
    return this.http.post(this.baseUrl + '/register', user);
  }

  login(name: string, password: string) {
    return this.http.post(this.baseUrl + '/login', { name, password });
  }

  // 🔐 Store user
  setUser(res: any) {
    localStorage.setItem('jwtToken', res.token);
    localStorage.setItem('role', res.role);
  }

  // 🔐 Get token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getUsername(): string | null {
  const token = this.getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.sub;
}

  // 🔐 Get role
  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  // 🔐 Check login (SAFE VERSION)
  isLoggedIn(): boolean {
    const token = this.getToken();

    return !!token && token !== 'undefined' && token !== 'null' && token.includes('.');
  }

  // 🔐 Logout
  logout() {
    localStorage.clear();
  }


}