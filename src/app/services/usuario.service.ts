import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuarioUrl = 'http://localhost:5000/api/v1/usuario';

  private headers = new HttpHeaders({ "Authorization": "" })

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({ "Authorization": this.authService.getToken() })
  }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.usuarioUrl}`, { "headers": this.headers }).pipe(
      map(usuarios => {
        return usuarios;
      })
    );
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/${id}`,
    { "headers": this.headers}).pipe(
      map(usuarioRetorno => {
        return usuarioRetorno;
      })  
    );
  }

  addUsuario(usuarioParam: Usuario) {
    let eventoJson = { "contato": JSON.stringify(usuarioParam) };
    this.http.post<any>(`${this.usuarioUrl}`, eventoJson, {
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

  editUsuario(usuarioParam: Usuario, idUsuario: number) {
    let usuarioJson = {
      "usuario": JSON.stringify(usuarioParam)
    };
    return this.http.put<any>(`${this.usuarioUrl}/${idUsuario}`, usuarioJson, {
      "headers"
        : this.headers
    }).subscribe({
      next: data => {
        return data;
      },
      error: error => {
        console.error('Houve um erro:', error);
      }
    });
  }

  removeUsuario(id: number) {
    this.http.delete<any>(`${this.usuarioUrl}/${id}`, {
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
    
    promoverUsuario(idUsuario: number){
        this.http.post<any>(`${this.usuarioUrl}/promover/${idUsuario}`, {"headers": this.headers}).subscribe({
          next: obj =>{
            return obj;
          },
          error: error => {
            console.error('Ocorreu um erro:', error)
          }
          })
      }
    }