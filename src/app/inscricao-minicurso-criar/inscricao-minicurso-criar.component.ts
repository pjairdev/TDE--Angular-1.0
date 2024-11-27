import { Component } from '@angular/core';
import { Inscricao } from '../model/inscricao.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscricaoService } from '../services/inscricao.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscricao-minicurso-criar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscricao-minicurso-criar.component.html',
  styleUrl: './inscricao-minicurso-criar.component.css'
})
export class InscricaoMinicursoCriarComponent {
  class_validate = "needs-validation";
  idMinicurso!: number;
  idInscricao!: number;

  Inscricao!: Inscricao;

  form_criarInscricaoMinicurso = new FormGroup({
    idMinicurso: new FormControl('', Validators.required),
    idParticipante: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private inscricaoService: InscricaoService, private authService: AuthService) {
  }

  valida_campos_dados(): boolean {
    if (this.form_criarInscricaoMinicurso.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  salvar() {
    if (this.valida_campos_dados()) {
      let inscricao = Object.assign(this.form_criarInscricaoMinicurso.value);
      if (this.idInscricao) {
        this.Inscricao.idMinicurso = inscricao.idMinicurso;
        this.inscricaoService.inscreverMinicurso(inscricao, this.idMinicurso)
      }
      this.router.navigateByUrl('minicurso/list')
    }
  }
}
