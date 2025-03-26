import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  onLogin() {
    // Implement login logic here
    console.log('Logging in with:', this.username, this.password);
  }

  onRegister() {
    // Implement register logic here
    console.log('Navigating to registration');
  }
}
