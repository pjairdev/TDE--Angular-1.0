import { Component } from '@angular/core';
import { Minicurso } from '../model/minicurso.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MinicursoService } from '../services/minicurso.service';

@Component({
  selector: 'app-minicurso-criar',
  standalone: true,
  imports: [],
  templateUrl: './minicurso-criar.component.html',
  styleUrl: './minicurso-criar.component.css'
})
export class MinicursoCriarComponent {

  class_validate = "needs-validation";
  idMinicurso!: number;
  minicurso!: Minicurso;
  form_minicursoList = new FormGroup({
    nome: new FormControl('', Validators.required),
    dt_inicio: new FormControl('', Validators.required),
    dt_fim: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    vagas: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    dt_limite_inscricao: new FormControl('', Validators.required),
    nome_palestrante: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private minicursoService: MinicursoService) {
  }

  ngOnInit(): void {
    this.atualizarMinicurso();
  }

  atualizarMinicurso() {
    if (this.idMinicurso) {
      this.minicursoService.getMinicursoById(this.idMinicurso).subscribe({
        next: (minicursoRetorno) => {
          if (minicursoRetorno.id) {
            this.minicurso = minicursoRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }
      })
    }
  }

  valida_campos_dados(): boolean {
    if (this.form_minicursoList.invalid) {
      this.class_validate = "was-validated";
      return false;
    } else {
      this.class_validate = "needs-validation";
      return true;
    }
  }

  criarMinicurso() {
    if (this.valida_campos_dados()) {

      console.log("osvaldo")
      let minicurso = Object.assign(this.form_minicursoList.value)
      this.minicursoService.criarMinicurso(minicurso);

    }
    this.router.navigateByUrl('/minicurso/list');

  }
}

