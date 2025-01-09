import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SawScoringService {
  private apiUrl = 'http://tu-api-url.com'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  calculateRanking(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saw-scoring`, data);
  }
}
