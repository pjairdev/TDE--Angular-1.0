import { Component } from '@angular/core';
import { PalestraService } from '../services/palestra.service';
import { Palestra } from '../model/palestra.model';

@Component({
  selector: 'app-palestras-list',
  standalone: true,
  imports: [],
  templateUrl: './palestras-list.component.html',
  styleUrl: './palestras-list.component.css'
})
export class PalestrasListComponent {
  palestras: Array<Palestra> = [];

  constructor(private palestraService: PalestraService) {

  }

  atualizarUsuarios() {
    this.palestraService.getPalestra().subscribe(
      {
        next: (palestras) => {
          this.palestras = palestras;
        },
        error: (erro) => {
          console.log(erro)
        }
      }
    );
  }
}
