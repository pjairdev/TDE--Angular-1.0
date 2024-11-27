import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PalestraService } from '../services/palestra.service';
import { Palestra } from '../model/palestra.model';

@Component({
  selector: 'app-palestra-remover',
  standalone: true,
  imports: [],
  templateUrl: './palestra-remover.component.html',
  styleUrl: './palestra-remover.component.css'
})
export class PalestraRemoverComponent {
  idPalestra!: number;
  palestras!: Palestra;

  constructor(private router: Router, private palestraService: PalestraService) {
  }

  atualizarPalestra() {
    if (this.idPalestra) {
      this.palestraService.getPalestraById(this.idPalestra).subscribe({
        next: (palestraRetorno) => {
          if (palestraRetorno.id) {
            this.palestras = palestraRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }

  removerPalestra(idPalestra: number) {
    if (this.idPalestra) {
      this.palestraService.removerPalestra(idPalestra);
      this.atualizarPalestra();
    }
  }
}
