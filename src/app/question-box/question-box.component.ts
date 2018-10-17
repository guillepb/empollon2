import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { Question } from '../question.model';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent implements OnInit {

  @Input() question: Question;
  @Output() correctlyAnswered: EventEmitter<boolean>;

  selectedAnswer: Answer;

  constructor() {
    this.correctlyAnswered = new EventEmitter();
  }

  verifyAnswer(answer: Answer): void {
    if (!this.question.isAnswered) {
      this.question.isAnswered = true;
      this.selectedAnswer = answer;
      this.question.isCorrect = answer.isCorrect;
      this.correctlyAnswered.emit(this.question.isCorrect);
    }
  }

  ngOnInit() {
  }

}