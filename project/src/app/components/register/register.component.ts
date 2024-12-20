import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register(username: string, password: string): void {
    this.authService.register(username, password).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.errorMessage = null; // Clear any previous errors
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error) => {
        console.error('Registration failed', error);
        this.errorMessage = error.message; // Display error message
      }
    );
  }
}