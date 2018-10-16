import {
  Component,
  Input,
  OnInit,
  HostBinding
} from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent implements OnInit {

  @Input() question: Question;
//  @HostBinding('attr.class') cssClass = 'ui segment';

  constructor() { }

  ngOnInit() {
  }

}
