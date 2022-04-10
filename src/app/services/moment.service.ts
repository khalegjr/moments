import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Interfaces/Moment';
import { environment } from 'src/environments/environment';
import { Response } from '../Interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiURL = environment.baseApiURL;
  private apiURL = `${this.baseApiURL}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiURL);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiURL, formData);
  }
}
