import {
  Component,
  Input,
  OnInit } from '@angular/core';

import { Question } from '../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() questions: Question[];
  score: number;
  answeredQuestions: number;

  constructor() { }

  ngOnInit() {
  }

}
