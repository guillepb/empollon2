import {
  Component,
  Input,
  OnInit,
  HostBinding} from '@angular/core';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-answer-row',
  templateUrl: './answer-row.component.html',
  styleUrls: ['./answer-row.component.css']
})
export class AnswerRowComponent implements OnInit {
  @Input() answer: Answer;
  @HostBinding('attr.class') cssClass = 'ui attached segment';

  constructor() { }

  ngOnInit() {
  }

}
