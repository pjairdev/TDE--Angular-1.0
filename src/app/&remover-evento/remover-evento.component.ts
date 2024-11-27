import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/evento.model';

@Component({
  selector: 'app-remover-evento',
  standalone: true,
  imports: [],
  templateUrl: './remover-evento.component.html',
  styleUrl: './remover-evento.component.css'
})
export class RemoverEventoComponent {

  idEvento!: number;
  evento!: Evento;

  constructor(private router: Router, private eventoService: EventoService) {
  }

  atualizarEvento() {
    if (this.idEvento) {
      this.eventoService.getEventoById(this.idEvento).subscribe({
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

  removerEvento(idEvento: number) {
    if (this.idEvento) {
      this.eventoService.removerEvento(idEvento);
      this.atualizarEvento();
    } 
  }
}


