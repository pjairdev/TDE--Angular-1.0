import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import { gerarHash } from '../util/geradorHash';

@Component({
  selector: 'app-usuario-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario-register.component.html',
  styleUrl: './usuario-register.component.css'
})
export class UsuarioRegisterComponent {
  class_validate = "needs-validation";
  usuario!: Usuario;
  idUsuario!: number;

  form_register = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private usuarioService: UsuarioService /*, private authService: AuthService */) {
    const state = this.router.getCurrentNavigation()?.extras.state
    if (state && state['idUsuario']) {
      const idUsuario = state['idUsuario'];
      if (idUsuario) {
        this.idUsuario = idUsuario;
      }
    }
  }

  ngOninit(): void {
    if (this.idUsuario) {
      this.usuarioService.getUsuarioById(this.idUsuario).subscribe({
        next: (usuario) => {
          this.usuario = usuario;
          this.preencherForm(usuario);
        }, error: (error) => {
          console.error('Ocorreu um erro: ', error)
        }
      })
    }
  }

  get f_dados() {
    return this.form_register.controls;
  }

  preencherForm(usuario: Usuario) {
    this.f_dados.nome.setValue(usuario.nome);
    this.f_dados.email.setValue(usuario.email);
    this.f_dados.cpf.setValue(usuario.cpf);
    this.f_dados.senha.setValue(usuario.senha);
  }

  valida_campos_dados(): boolean {
    if (this.form_register.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  Logar() {
    this.router.navigateByUrl('/usuario/logar');
  }

  registrar() {
    if (this.valida_campos_dados()) {
      let usuarioDigitado = Object.assign(this.form_register.value);

      if (this.idUsuario) {
        this.usuario.cpf = usuarioDigitado.cpf;
        this.usuario.nome = usuarioDigitado.nome;
        this.usuario.email = usuarioDigitado.email;
        this.usuario.senha = usuarioDigitado.senha;
        this.usuarioService.editUsuario(this.usuario, this.idUsuario)
      } else {
        this.usuarioService.addUsuario(this.usuario);
      }
      this.router.navigateByUrl('/usuario/logar');
    }
  }
}