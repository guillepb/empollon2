import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestionsFromSet(set: number): Question[] {
    const url: string = [
      this.apiUrl,
      'set',
      set,
      'questions'
    ].join('/');
    console.log(url);
    let data;
    this.http.get(url).subscribe(response => data = response);
    console.log(data);

    return [
      new Question (
        'Según los procedimientos en vigor, ¿qué procedimiento tiene que aplicar el sector \
          P1U para una arribada a LEVC vía EBROX-SOPET?:',
        [
          {
            'text': 'Bajarla a FL 350 y pasarla al sector P1L.',
            'isCorrect': true
          },
          {
            'text': 'Bajarla a FL 310 y pasarla al sector DDS.',
            'isCorrect': false
          },
          {
            'text': 'Coordinar nivel de transferencia con el sector P1L.',
            'isCorrect': false
          }
      ]
      ),
      new Question (
        'De acuerdo con LoA en vigor entre LECB y LFBB, los sobrevuelos con destino \
          LFBO, LFBP y LFBT deben ser transferidos por LECB, vía:',
        [
          {
            'text': 'GIROM',
            'isCorrect': true
          },
          {
            'text': 'OKABI',
            'isCorrect': false
          },
          {
            'text': 'ANETO',
            'isCorrect': false
          }
      ]
      ),
      new Question (
        'De acuerdo con LoA en vigor entre LECB y LFBB, los sobrevuelos con destino \
          LFBO, LFBP y LFBT deben ser transferidos por LECB, vía:',
        [
          {
            'text': 'GIROM',
            'isCorrect': true
          },
          {
            'text': 'OKABI',
            'isCorrect': false
          },
          {
            'text': 'ANETO',
            'isCorrect': false
          }
      ]
      )
    ];
  }
}
