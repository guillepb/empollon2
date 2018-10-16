import {
  Component,
  Input,
  HostBinding,
  OnInit } from '@angular/core';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-answer-row',
  templateUrl: './answer-row.component.html',
  styleUrls: ['./answer-row.component.css']
})
export class AnswerRowComponent implements OnInit {
  @Input() answer: Answer;
//  @HostBinding('attr.class') cssClass = 'ui segment';

  constructor() { }

  ngOnInit() {
  }

}
