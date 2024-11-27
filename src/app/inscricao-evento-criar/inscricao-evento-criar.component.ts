import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Inscricao } from '../model/inscricao.model';
import { Router } from '@angular/router';
import { InscricaoService } from '../services/inscricao.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscricao-evento-criar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscricao-evento-criar.component.html',
  styleUrl: './inscricao-evento-criar.component.css'
})
export class InscricaoEventoCriarComponent {

  class_validate = "needs-validation";
  idEvento!: number;
  idInscricao!: number;

  Inscricao!: Inscricao;
  mensagem = "";

  form_criarInscricao = new FormGroup({
    idEvento: new FormControl('', Validators.required),
    idParticipante: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private inscricaoService: InscricaoService, private authService: AuthService){
  }

  valida_campos_dados(): boolean {
    if (this.form_criarInscricao.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  salvar(){
    if(this.valida_campos_dados()){
      let inscricao = Object.assign(this.form_criarInscricao.value);
      if (this.idInscricao) {
          this.Inscricao.idEvento = inscricao.idEvento;
          this.inscricaoService.inscreverEvento(inscricao, this.idEvento)
      }
        this.router.navigateByUrl('evento/list')  
    }
  }
}