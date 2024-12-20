import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    const success = this.authService.login(username, password);
    if (success) {
      console.log('Login successful');
      this.errorMessage = null; // Clear any previous errors
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    } else {
      console.error('Login failed');
      this.errorMessage = 'Invalid username or password'; // Display error message
    }
  }
}