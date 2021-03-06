import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SetFormComponent } from './set-form/set-form.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { AnswerRowComponent } from './answer-row/answer-row.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SetFormComponent,
    QuizComponent,
    ScoreComponent,
    QuestionBoxComponent,
    AnswerRowComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
