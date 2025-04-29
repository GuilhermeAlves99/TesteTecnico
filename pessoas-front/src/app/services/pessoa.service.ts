import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pessoa } from '../models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  constructor(private http: HttpClient) { }

  getPessoas() {
    return this.http.get<Pessoa[]>(`http://localhost:5000/api/Pessoas`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}