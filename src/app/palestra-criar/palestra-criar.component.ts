import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Palestra } from '../model/palestra.model';
import { Router } from '@angular/router';
import { PalestraService } from '../services/palestra.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-palestra-criar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './palestra-criar.component.html',
  styleUrl: './palestra-criar.component.css'
})
export class PalestraCriarComponent {

  class_validate = "needs-validation";
  idPalestra!: number;
  Palestra!: Palestra;
  mensagem = "";
  form_palestraList = new FormGroup({
    nome: new FormControl('', Validators.required),
    id_evento: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    dt_palestra: new FormControl('', Validators.required),
    horario_inicio_palestra: new FormControl('', Validators.required),
    horario_fim_palestra: new FormControl('', Validators.required),
    nome_palestrante: new FormControl('', Validators.required),
    minicurriculo_palestrante: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private PalestraService: PalestraService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.atualizarPalestra();
  }

  atualizarPalestra() {
    if (this.idPalestra) {
      this.PalestraService.getPalestraById(this.idPalestra).subscribe({
        next: (palestraRetorno) => {
          if (palestraRetorno.id) {
            this.Palestra = palestraRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }

  valida_campos_dados(): boolean {
    if (this.form_palestraList.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  criarPalestra() {
    if (this.valida_campos_dados()) {

      console.log("osvaldo")
      let palestra = Object.assign(this.form_palestraList.value)
      this.PalestraService.criarPalestra(palestra);

    }
    this.router.navigateByUrl('/palestra/list');

  }
}
