import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from '../core/interfaces/laptop';

@Injectable({
  providedIn: 'root'
})
export class MineriaService {

  constructor(private http: HttpClient) { }

  getLaptops(values: any): Observable<Laptop[]> {
    return this.http.post<Laptop[]>('http://localhost:8080/api/process-csv', values);
  }
}
