import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ParametrosAlgoritmo {
  Matriz: number[][];
  Arreglo: number[];
  Texto: 'Max' | 'Min';
}

@Injectable({
  providedIn: 'root',
})
export class SimplexService {
  private apiUrl = 'http://localhost:7184/Simplex/recibir-string';

  constructor(private http: HttpClient) {}

  enviarParametros(datos: ParametrosAlgoritmo): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
