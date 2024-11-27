import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Minicurso } from '../model/minicurso.model';

@Injectable({
  providedIn: 'root'
})
export class MinicursoService {

  private minicursoUrl = 'http://localhost:5000/api/v1/minicurso/';
  private headers = new HttpHeaders({ "Authorization": "" })

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({ "Authorization": this.authService.getToken() })
  }

  getMinicurso(): Observable<Minicurso[]> {
    return this.http.get<Minicurso[]>(`${this.minicursoUrl}`, { "headers": this.headers }).pipe(
      map(minicursos => {
        return minicursos;
      })
    );
  }

  getMinicursoById(id: number): Observable<Minicurso> {
    return this.http.get<Minicurso>(`${this.minicursoUrl}/${id}`, { "headers": this.headers }).pipe(
      map(obj => {
        return obj;
      })
    );
  }

  criarMinicurso(minicursoParam: Minicurso){
    let minicursoJson = { "contato": JSON.stringify(minicursoParam) };
      this.http.post<any>(`${this.minicursoUrl}`, minicursoJson, {
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

  atualizarMinicurso(id: number, minicursoParam: Minicurso){
    let mincursoJson = { "minicurso ": JSON.stringify(minicursoParam)};
    return this.http.put<any>(`${this.minicursoUrl}/${id}`, mincursoJson, { "headers": this.headers}).subscribe({
      next: obj => {
        return obj;
      },
      error: error =>{
        console.error('Ocorreu um erro: ', error);
      }
    });
  }

  removerMinicurso(id: number) {
    return this.http.delete<void>(`${this.minicursoUrl}/${id}`, { "headers": this.headers }).subscribe({

      next: obj => {
        return obj;
      },
      error: error => {
        console.error('Ocorreu o erro: ', error);
      }
    });
  }
}