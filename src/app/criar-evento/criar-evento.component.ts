import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/evento.model';

@Component({
  selector: 'app-criar-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './criar-evento.component.html',
  styleUrl: './criar-evento.component.css'
})
export class CriarEventoComponent {

  class_validate = "needs-validation";
  idEvento!: number;
  evento!: Evento;
  mensagem = "";
  form_eventList = new FormGroup({
    nome: new FormControl('', Validators.required),
    dt_inicio: new FormControl('', Validators.required),
    dt_fim: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    vagas: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    dt_limite_inscricao: new FormControl('', Validators.required),
    numero_vagas: new FormControl('', Validators.required),
    cpf_responsavel: new FormControl('', Validators.required),
    nome_responsavel: new FormControl('', Validators.required),
    email_responsavel: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private EventoService: EventoService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.atualizarEvento();
  }

  atualizarEvento() {
    if (this.idEvento) {
      this.EventoService.getEventoById(this.idEvento).subscribe({
        next: (eventoRetorno) => {
          if (eventoRetorno.id) {
            this.evento = eventoRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }

  valida_campos_dados(): boolean {
    if (this.form_eventList.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  criarEvento() {
    if (this.valida_campos_dados()) {

      console.log("osvaldo")
      let evento = Object.assign(this.form_eventList.value)
      this.EventoService.cadastrarEvento(evento);

    }
    this.router.navigateByUrl('/evento/list');

  }
}
