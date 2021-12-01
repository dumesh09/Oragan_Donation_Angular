import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepientService {
  private baseUrl = 'http://localhost:8080/organ-donation-system/api/v1/recepient';


  constructor(private http: HttpClient) { }
  getRecepient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRecepient(recepient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, recepient);
  }

  updateRecepient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecepient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRecepientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
