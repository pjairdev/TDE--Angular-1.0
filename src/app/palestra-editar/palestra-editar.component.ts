import { Component } from '@angular/core';
import { Palestra } from '../model/palestra.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PalestraService } from '../services/palestra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-palestra-editar',
  standalone: true,
  imports: [],
  templateUrl: './palestra-editar.component.html',
  styleUrl: './palestra-editar.component.css'
})
export class PalestraEditarComponent {

  class_validate = "needs-validation";
  idPalestra!: number;
  palestra!: Palestra;
  mensagem = "";
  form_palestraEdit = new FormGroup({
    nome: new FormControl('', Validators.required),
    id_evento: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    dt_palestra: new FormControl('', Validators.required),
    horario_inicio_palestra: new FormControl('', Validators.required),
    horario_fim_palestra: new FormControl('', Validators.required),
    nome_palestrante: new FormControl('', Validators.required),
    minicurriculo_palestrante: new FormControl('', Validators.required),
  })


  constructor(private router: Router, private palestraService: PalestraService/*, private authService: AuthService*/) {
  }

  ngOnInit(): void {
    this.atualizarPalestra();
  }

  atualizarPalestra() {
    if (this.idPalestra) {
      this.palestraService.getPalestraById(this.idPalestra).subscribe({
        next: (palestraRetorno) => {
          if (palestraRetorno.id) {
            this.palestra = palestraRetorno;
          }
        }, error: (erro) => {
          console.log(erro)
        }

      })
    }
  }

  editarUsuario() {
    let palestraPosto = Object.assign(this.form_palestraEdit.value);
      if (this.idPalestra) {
          this.palestra.nome = palestraPosto.nome;
          this.palestra.id_evento = palestraPosto.id_evento;
          this.palestra.descricao = palestraPosto.descricao;
          this.palestra.dt_palestra = palestraPosto.dt_palestra;
          this.palestra.horario_inicio_palestra= palestraPosto.horario_inicio_palestra;
          this.palestra.horario_fim_palestra= palestraPosto.horario_fim_palestra;
          this.palestra.nome_palestrante = palestraPosto.nome_palestrante;
          this.palestra.minicurriculo_palestrante = palestraPosto.minicurriculo_palestrante;
          this.palestraService.atualizarPalestra(this.idPalestra, palestraPosto)
      } else {
         this.palestraService.criarPalestra(this.palestra)
      }
    this.router.navigateByUrl('/palestra/list');
  }
}
