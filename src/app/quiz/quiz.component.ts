import {
  Component,
  Input,
  HostBinding,
  OnInit } from '@angular/core';

import { Question } from '../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui segment';
  @Input() questions: Question[];
  score = 0;
  answeredQuestions = 0;

  constructor() { }

  scoreAnsweredQuestion (success: boolean): void {
    this.answeredQuestions++;
    if (success) {
      this.score++;
    }
  }

  ngOnInit() {
  }

}
