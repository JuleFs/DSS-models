import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alternativa } from '../core/interfaces/laptop';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {
  private readonly apiUrl = 'http://127.0.0.1:8000/alternativas/';

  constructor(private http: HttpClient) {}

  addAlternativa(alternativa: Alternativa): Observable<any> {
    return this.http.post(this.apiUrl, alternativa);
  }
}
