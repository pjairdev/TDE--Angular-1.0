import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Evento } from '../model/evento.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventoUrl = 'http://localhost:5000/api/v1/evento';
  private headers = new HttpHeaders({ "Authorization": "" })

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({ "Authorization": this.authService.getToken() })
  }

  getEvento(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.eventoUrl}`, { "headers": this.headers }).pipe(
      map(eventos => {
        return eventos;
      })
    );
  }

  getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.eventoUrl}/${id}`, { "headers": this.headers }).pipe(
      map(obj => {
        return obj;
      })
    );
  }

  cadastrarEvento(eventoParam: Evento) {
    let eventoJson = { "evento": JSON.stringify(eventoParam) };
    this.http.post<any>(`${this.eventoUrl}`, eventoJson, {
      "headers":
        this.headers
    }).subscribe({
      next: data => {
        return data;
      },
      error: error => {
        console.error('Houve um erro:', error);
      }
    });
  }

  atualizarEvento(eventoParam: Evento, id: number){
    let eventoJson = { "evento ": JSON.stringify(eventoParam)};
    return this.http.put<any>(`${this.eventoUrl}/${id}`, eventoJson, { "headers": this.headers}).subscribe({
      next: obj => {
        return obj;
      },
      error: error =>{
        console.error('Ocorreu um erro: ', error);
      }
    });
  }

  removerEvento(id: number) {
    return this.http.delete<void>(`${this.eventoUrl}/${id}`, { "headers": this.headers }).subscribe({

      next: obj => {
        return obj;
      },
      error: error => {
        console.error('Ocorreu o erro: ', error);
      }
    });
  }
}