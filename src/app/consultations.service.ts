import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Consultation } from './consultation';
import { Observable } from 'rxjs';

interface PostResponse {
  consultationCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {

  url: string = '';

  constructor(private httpClient: HttpClient) {
    this.url = environment.url;
  }

  getConsultations(minDate: string, maxDate: string): Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(`${this.url}?minDate=${minDate}&maxDate=${maxDate}`);
  }

  getConsultationsByCC(cc:string, minDate: string, maxDate: string): Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(`${this.url}/${cc}?minDate=${minDate}&maxDate=${maxDate}`);
  }

  cancelConsultation(consultationCode: string): Observable<Consultation> {
    return this.httpClient.patch<Consultation>(`${this.url}/${consultationCode}`, consultationCode);
  }

  createConsultation(cc: string, consultationDate: string, formData: FormData): Observable<PostResponse> {
    return this.httpClient.post<PostResponse>(`${this.url}?cc=${cc}&date=${consultationDate}`, formData);
  }

  getAuthorizationImage(consultationCode: string): string{
    return `${this.url}/authorizations/${consultationCode}`
  }
}
