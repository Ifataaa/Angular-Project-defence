import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  private users: { username: string; password: string }[] = []; // In-memory storage for registered users

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem(this.TOKEN_KEY, 'mock-token'); // Save a mock token
      return true;
    } else {
      console.error('Login failed: Incorrect username or password');
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(username: string, password: string): Observable<any> {
    return new Observable((observer) => {
      const userExists = this.users.some((u) => u.username === username);
      if (userExists) {
        observer.error({ success: false, message: 'User already exists' });
      } else {
        this.users.push({ username, password }); // Store the new user
        observer.next({ success: true, message: 'Registration successful' });
        observer.complete();
      }
    });
  }
}
