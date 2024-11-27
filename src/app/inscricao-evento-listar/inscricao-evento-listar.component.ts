import { Component } from '@angular/core';
import { Inscricao } from '../model/inscricao.model';

@Component({
  selector: 'app-inscricao-evento-listar',
  standalone: true,
  imports: [],
  templateUrl: './inscricao-evento-listar.component.html',
  styleUrl: './inscricao-evento-listar.component.css'
})
export class InscricaoEventoListarComponent {
  inscricoes: Array<Inscricao> = []
  
}
