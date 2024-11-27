import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscricao } from '../model/inscricao.model';
import { AuthService } from '../services/auth.service';
import { InscricaoService } from '../services/inscricao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscricao-palestra-criar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscricao-palestra-criar.component.html',
  styleUrl: './inscricao-palestra-criar.component.css'
})
export class InscricaoPalestraCriarComponent {
  class_validate = "needs-validation";
  idPalestra!: number;
  idInscricao!: number;

  Inscricao!: Inscricao;

  form_criarInscricaoPalestra = new FormGroup({
    idPalestra: new FormControl('', Validators.required),
    idParticipante: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private inscricaoService: InscricaoService, private authService: AuthService) {
  }

  valida_campos_dados(): boolean {
    if (this.form_criarInscricaoPalestra.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  salvar() {
    if (this.valida_campos_dados()) {
      let inscricao = Object.assign(this.form_criarInscricaoPalestra.value);
      if (this.idInscricao) {
        this.Inscricao.idPalestra = inscricao.idPalestra;
        this.inscricaoService.inscreverPalestra(inscricao, this.idPalestra)
      }
      this.router.navigateByUrl('palestras/list')
    }
  }
}
