import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges } from '@angular/core';

import { Question } from '../question.model';
import { ApiService } from '../api.service';

import { merge } from 'rxjs';
import { _ } from 'underscore';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnChanges {
  @HostBinding('attr.class') cssClass = 'ui segment';
  @Input() quizSetup: any;
  @Output() scoreUpdated: EventEmitter<any>;

  questionList: Question[];
  scoreData: any = {
    'score': 0,
    'answeredQuestions': 0
  };

  constructor(private apiService: ApiService) {
    this.scoreUpdated = new EventEmitter();
  }

  getQuestions(sets: any[], shuffleQuestions?: boolean): void {
    this.questionList = [];
    // console.log(sets);
    const setArray = sets.map(item => item['id']);
    // console.log(setArray);
    merge(...setArray.map(set => this.apiService.getQuestionsFromSet(set)))
      .subscribe(data => {
        this.questionList.push(...data)
        if (shuffleQuestions) {
          this.questionList = _.shuffle(this.questionList);
        }
      });
    // console.log(this.questionList);
  }

  scoreAnsweredQuestion (success: boolean): void {
    this.scoreData.answeredQuestions++;
    if (success) {
      this.scoreData.score++;
    }
    this.scoreUpdated.emit(this.scoreData);
  }

  ngOnChanges() {
    this.scoreData.score = 0;
    this.scoreData.answeredQuestions = 0;
    if (this.quizSetup.sets) {
      this.getQuestions(this.quizSetup.sets, this.quizSetup.shuffleQuestions);
    }
  }

}
