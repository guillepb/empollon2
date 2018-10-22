import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { ApiService } from './api.service';

import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'empollon2';
  questionList: Question[];

  constructor (private apiService: ApiService) {
  }

  getQuestions(sets: number[]): void {
    this.questionList = [];

    merge(...sets.map(set => this.apiService.getQuestionsFromSet(set)))
      .subscribe(data => this.questionList.push(...data));

    // console.log(this.questionList);
  }

  ngOnInit() {
    // in the future, get args from form
    this.getQuestions([1, 2, 3]);
  }
}

