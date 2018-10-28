import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'empollon2';
  questionList: Question[];
  quizSetup: any;
  scoreData: any;

  constructor () {
  }

  ngOnInit() {
  }
}

