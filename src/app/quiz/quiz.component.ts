import {
  Component,
  Input,
  HostBinding,
  OnChanges } from '@angular/core';

import { Question } from '../question.model';
import { ApiService } from '../api.service';

import { merge } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnChanges {
  @HostBinding('attr.class') cssClass = 'ui segment';
  @Input() quizSetup: any;

  questionList: Question[];
  score = 0;
  answeredQuestions = 0;

  constructor(private apiService: ApiService) {}

  getQuestions(sets: any[], shuffleQuestions?: boolean): void {
    this.questionList = [];
    // console.log(sets);
    const setArray = sets.map(item => item['id']);
    // console.log(setArray);
    merge(...setArray.map(set => this.apiService.getQuestionsFromSet(set)))
      .subscribe(data => {
        this.questionList.push(...data)
        console.log(this.questionList);
      });
    // console.log(this.questionList);
  }

  scoreAnsweredQuestion (success: boolean): void {
    this.answeredQuestions++;
    if (success) {
      this.score++;
    }
  }

  ngOnChanges() {
    this.getQuestions(this.quizSetup.sets, this.quizSetup.shuffleQuestions);
  }

}
