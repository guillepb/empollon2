import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Question } from './question.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestionsFromSet(set: number): Observable<Question[]> {
    const url: string = [
      this.apiUrl,
      'tema',
      set,
      'preguntas'
    ].join('/');
    return this.http.get<Question[]>(url).pipe(map(res => Question.mapFromApi(res)));
  }

  getFacs(): Observable<any[]> {
    const url: string = [
      this.apiUrl,
      'dependencias',
    ].join('/');
    return this.http.get<any[]>(url);
  }

  getSetsFromCluster(cluster: number): Observable<any[]> {
    const url: string = [
      this.apiUrl,
      'nucleo',
      cluster,
      'temas'
    ].join('/');
    return this.http.get<any[]>(url);
  }
}
