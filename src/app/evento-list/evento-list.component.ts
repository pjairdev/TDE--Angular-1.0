import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from '../model/evento.model';
import { ReactiveFormsModule } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './evento-list.component.html',
  styleUrl: './evento-list.component.css'
})

export class EventoListComponent {
  eventos: Array<Evento> = [];

  constructor(private router: Router, private eventoService: EventoService){
    
  }

  atualizarUsuarios(){
    this.eventoService.getEvento().subscribe(
      {
        next: (eventos) => {
          this.eventos = eventos;
        },
        error: (erro) => {
          console.log(erro)
        }
      }
    );
  }

  navigationCriarEvento(){
    this.router.navigateByUrl('evento/criar');
  }

  
}
