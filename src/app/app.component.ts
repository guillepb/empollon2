import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empollon2';
  questionList: Question[];

  constructor () {
    this.questionList = [
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

