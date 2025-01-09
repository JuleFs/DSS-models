import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerceptronService {

  constructor(private http: HttpClient) { }

  getUsage(values: any) {
    return this.http.post('http://127.0.0.1:8010/classify', values);
  }
}
