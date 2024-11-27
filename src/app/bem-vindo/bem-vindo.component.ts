import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bem-vindo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bem-vindo.component.html',
  styleUrl: './bem-vindo.component.css'
})
export class BemVindoComponent {



  constructor(private router: Router, authService: AuthService) {
  }
  
  login() {
    this.router.navigateByUrl('/usuario/logar');
  }

  registrar(){
    this.router.navigateByUrl('/usuario/register');
  }
}

