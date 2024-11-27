import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { gerarHash } from '../util/geradorHash';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  class_validate = "needs-validation";
  mensagem = "";
  form_login = new FormGroup({
    //pode ser essa parte do código
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
});
constructor(private router: Router, private authService: AuthService){
}

valida_campos_dados(): boolean {
  if (this.form_login.invalid) {
    this.class_validate = "was-validated";
    return false;
  } else {
    this.class_validate = "needs-validation";
    return true;
  }
}

cadastrar(){
  this.router.navigateByUrl('/usuario/register');
}

logar() {
    if (this.valida_campos_dados()) {
      console.log(gerarHash(this.form_login.get('password')?.value ?? "xpto"));

      let user = {
        "cpf": this.form_login.get('cpf')?.value, "senha":this.form_login.get('senha')?.value
      };
      if (!this.authService.isLoggedIn()) {

        this.authService.login(user).subscribe({
          next: token => {
            if (token) {
              this.authService.setToken(token['token']);
              this.router.navigateByUrl('');
            }
          },
          error: error => {
            console.error('Houve um erro:', error);
            console.log(error.error.message);
            this.mensagem = error.error.message;
          }
        });

      } else {
        this.router.navigateByUrl('');
      }
    }
  }
}