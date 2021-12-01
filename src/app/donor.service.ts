import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private baseUrl = 'http://localhost:8080/organ-donation-system/api/v1/donar';


  constructor(private http: HttpClient) { }
  getDonor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDonor(donor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, donor);
  }

  updateDonor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDonor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDonorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
