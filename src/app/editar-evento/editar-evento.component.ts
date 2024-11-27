import { Component } from '@angular/core';
import { Evento } from '../model/evento.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-editar-evento',
  standalone: true,
  imports: [],
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css'
})
export class EditarEventoComponent {
  class_validate = "needs-validation";
  idEvento!: number;
  evento!: Evento;
  mensagem = "";
  form_edit = new FormGroup({
  nome: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  cpf: new FormControl('', Validators.required),
  senha: new FormControl('', Validators.required)
  })


  constructor(private router: Router, private eventoService: EventoService/*, private authService: AuthService*/) {
  }

  ngOnInit(): void {
    this.atualizarEvento()
  }

  atualizarEvento(){
    if (this.idEvento) {
      this.eventoService.getEventoById(this.idEvento).subscribe({
        next: (eventoRetorno) => {
          if (eventoRetorno.nome) {
            this.evento = eventoRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }

  editarUsuario() {
    let eventoPosto = Object.assign(this.form_edit.value);
      if (this.idEvento) {
          this.evento.nome = eventoPosto.cpf;
          this.evento.dt_inicio = eventoPosto.nome;
          this.evento.dt_fim = eventoPosto.dt_fim;
          this.evento.dt_limite_inscricao = eventoPosto.dt_limite_inscricao;
          this.evento.descricao = eventoPosto.descricao;
          this.evento.numero_vagas = eventoPosto.numero_vagas;
          this.evento.nome_responsavel = eventoPosto.nome_responsavel;
          this.evento.email_responsavel = eventoPosto.email_responsavel;
          this.eventoService.atualizarEvento(eventoPosto, this.idEvento)
      } else {
         this.eventoService.cadastrarEvento(this.evento)
      }
    this.router.navigateByUrl('/evento/list');
  }
}





