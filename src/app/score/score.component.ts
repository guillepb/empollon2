import {
  Component,
  OnInit,
  HostBinding,
  Input
 } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui segment right aligned';
  @Input() totalAnswered: number;
  @Input() correctAnswers: number;

  constructor() { }

  ngOnInit() {
  }

}
