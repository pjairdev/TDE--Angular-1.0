import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../model/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})

export class UsuarioListComponent {
  usuarios: Array<Usuario> = [];
  idUsuario!: number;

  constructor(private router: Router,private usuarioService: UsuarioService/*, private authService: AuthService*/) {
  }

  atualizarUsuarios() {
    this.usuarioService.getUsuario().subscribe(
      {
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
        error: (erro) => {
          console.log(erro)
        }
      }
    );
  }

  navigateHome(){
    this.router.navigateByUrl('');
  }

  alterarUsuario(idUsuario: number){
    this.router.navigateByUrl('/usuario/register', {state: { id: idUsuario } });
    console.log(idUsuario);
  }
  
  removerUsuario(idUsuario: number){
    if(this.idUsuario){
      this.usuarioService.removeUsuario(idUsuario);
      this.atualizarUsuarios();
    }
  }

  promoverUsurario(idUsuario: number) {
    if (this.idUsuario) {
      this.usuarioService.promoverUsuario(idUsuario);
      this.atualizarUsuarios();
    }
  }
}