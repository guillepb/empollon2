import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetFormComponent } from './set-form/set-form.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { AnswerRowComponent } from './answer-row/answer-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SetFormComponent,
    QuizComponent,
    ScoreComponent,
    QuestionBoxComponent,
    AnswerRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
