import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { ApiService } from './api.service';

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

  getQuestions(): void {
    this.questionList = [];
    this.apiService.getQuestionsFromSet(1).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.getQuestions();
  }
}

