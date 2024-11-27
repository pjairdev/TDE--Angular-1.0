import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../model/usuario.model';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

export class UsuarioComponent {
  class_validate = "needs-validation";
  idUsuario!: number;
  usuario!: Usuario;
  mensagem = "";
  form_edit = new FormGroup({
  nome: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  cpf: new FormControl('', Validators.required),
  senha: new FormControl('', Validators.required)
  })


  constructor(private router: Router, private usuarioService: UsuarioService/*, private authService: AuthService*/) {

    const state = this.router.getCurrentNavigation()?.extras.state
    if (state && state['idUsuario']) {
      const idUsuario = state['idUsuario'];
      if (idUsuario) {
        this.idUsuario = idUsuario;
      }
    }
  }

  ngOnInit(): void {
    this.atualizarUsuarios
  }

  atualizarUsuarios(){
    if (this.idUsuario) {
      this.usuarioService.getUsuarioById(this.idUsuario).subscribe({
        next: (usuarioRetorno) => {
          if (usuarioRetorno.nome) {
            this.usuario = usuarioRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }


  editarUsuario() {
    let usuarioPosto = Object.assign(this.form_edit.value);
      if (this.idUsuario) {
          this.usuario.cpf = usuarioPosto.cpf;
          this.usuario.nome = usuarioPosto.nome;
          this.usuario.email = usuarioPosto.email;
          this.usuario.senha = usuarioPosto.email;
          this.usuarioService.editUsuario(this.usuario, this.idUsuario)
      } else {
         this.usuarioService.addUsuario(this.usuario)
      }
    this.router.navigateByUrl('/usuario/list');
  }

  remover(idUsuario: number){
    this.usuarioService.removeUsuario(idUsuario);
    this.atualizarUsuarios();
  }


}