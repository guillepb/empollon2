import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
