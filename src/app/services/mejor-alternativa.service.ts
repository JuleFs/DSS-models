import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MejorAlternativaService {
  private readonly apiUrl = 'http://127.0.0.1:8000/mejor_alternativa/';

  constructor(private http: HttpClient) {}

  calcularMejorAlternativa(): Observable<{ mensaje: string }> {
    return this.http.get<{ mensaje: string }>(this.apiUrl);
  }
}
