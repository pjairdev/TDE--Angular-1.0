import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  mensagem = "";
  private inscricaoUrl = 'http://localhost:5000/api/v1/inscricao';
  private headers = new HttpHeaders({ "Authorization": "" })

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({ "Authorization": this.authService.getToken() })
  }

  //funções post para se inscrever

  inscreverEvento(idEvento: number, idUsuario: number) {
    let eventoUsuario = {
      "idEvento": idEvento,
      "idParticipante": idUsuario
    }
    return this.http.post<any[]>(`${this.inscricaoUrl}/evento`, eventoUsuario, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error);
        this.mensagem = error;
      }
    })
  }

  inscreverMinicurso(idMinicurso: number, idUsuario: number) {
    let minicursoUsuario = {
      "idEvento": idMinicurso,
      "idParticipante": idUsuario
    }
    return this.http.post<any[]>(`${this.inscricaoUrl}/minicurso`, minicursoUsuario, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error);
      }
    })
  }

  inscreverPalestra(idPalestra: number, idUsuario: number) {
    let palestraUsuario = {
      "idEvento": idPalestra,
      "idParticipante": idUsuario
    }
    return this.http.post<any[]>(`${this.inscricaoUrl}/evento`, palestraUsuario, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error);
      }
    })
  }

  //funções get para listar as inscrições 

  listarInscritosEvento(idEvento: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.inscricaoUrl}/evento/${idEvento}`, { "headers": this.headers }).pipe(
      map(inscritosEvento => {
        return inscritosEvento
      })
    )
  }

  listarInscritosMinicurso(idMinicurso: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.inscricaoUrl}/minicurso/${idMinicurso}`, { "headers": this.headers }).pipe(
      map(inscritosMinicurso => {
        return inscritosMinicurso
      })
    )
  }

  listarInscritosPalestra(idPalestra: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.inscricaoUrl}/palestra/${idPalestra}`, { "headers": this.headers }).pipe(
      map(inscritosEvento => {
        return inscritosEvento
      })
    )
  }

  //Funções delete para remover as inscrições por meio do ID 

  removerInscricaoEvento(idEvento: number, idUsuario: number) {
    this.http.delete<any>(`${this.inscricaoUrl}/evento/${idEvento}/${idUsuario}`, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error)
      }
    })
  }

  removerInscricaoMinicurso(idMinicurso: number, idUsuario: number) {
    this.http.delete<any>(`${this.inscricaoUrl}/evento/${idMinicurso}/${idUsuario}`, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error)
      }
    })
  }

  removerInscricaoPalestra(idPalestra: number, idUsuario: number) {
    this.http.delete<any>(`${this.inscricaoUrl}/evento/${idPalestra}/${idUsuario}`, { "headers": this.headers }).subscribe({
      next: data => {
        return data
      },
      error: error => {
        console.error('Ocorreu um erro: ', error)
      }
    })
  }

}
