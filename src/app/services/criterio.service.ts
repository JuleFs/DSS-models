import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criterio } from '../core/interfaces/laptop';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {
  private readonly apiUrl = 'http://127.0.0.1:8000/criterios/';

  constructor(private http: HttpClient) {}

  addCriterio(criterio: Criterio): Observable<any> {
    return this.http.post(this.apiUrl, criterio);
  }
}
