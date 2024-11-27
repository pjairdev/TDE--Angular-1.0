import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Palestra } from '../model/palestra.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalestraService {

  private palestraUrl = 'http://localhost:5000/api/v1/palestra/';
  private headers = new HttpHeaders({ "Authorization": "" })

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({ "Authorization": this.authService.getToken() })
  }

  getPalestra(): Observable<Palestra[]> {
    return this.http.get<Palestra[]>(`${this.palestraUrl}`, { "headers": this.headers }).pipe(
      map(Palestras => {
        return Palestras;
      })
    );
  }

  getPalestraById(id: number): Observable<Palestra> {
    return this.http.get<Palestra>(`${this.palestraUrl}/${id}`, { "headers": this.headers }).pipe(
      map(obj => {
        return obj;
      })
    );
  }

  criarPalestra(PalestraParam: Palestra){
    let PalestraJson = { "contato": JSON.stringify(PalestraParam) };
      this.http.post<any>(`${this.palestraUrl}`, PalestraJson, {
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

  atualizarPalestra(id: number, PalestraParam: Palestra){
    let mincursoJson = { "Palestra ": JSON.stringify(PalestraParam)};
    return this.http.put<any>(`${this.palestraUrl}/${id}`, mincursoJson, { "headers": this.headers}).subscribe({
      next: obj => {
        return obj;
      },
      error: error =>{
        console.error('Ocorreu um erro: ', error);
      }
    });
  }

  removerPalestra(id: number) {
    return this.http.delete<void>(`${this.palestraUrl}/${id}`, { "headers": this.headers }).subscribe({

      next: obj => {
        return obj;
      },
      error: error => {
        console.error('Ocorreu o erro: ', error);
      }
    });
  }
}
