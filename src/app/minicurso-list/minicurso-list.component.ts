import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Minicurso } from '../model/minicurso.model';
import { MinicursoService } from '../services/minicurso.service';

@Component({
  selector: 'app-minicurso-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minicurso-list.component.html',
  styleUrl: './minicurso-list.component.css'
})
export class MinicursoListComponent {
    minicursos: Array<Minicurso> = [];
  
    constructor(private minicursoService: MinicursoService){
      
    }
  
    atualizarUsuarios(){
      this.minicursoService.getMinicurso().subscribe(
        {
          next: (minicursos) => {
            this.minicursos = minicursos;
          },
          error: (erro) => {
            console.log(erro)
          }
        }
      );
    }
  
}
