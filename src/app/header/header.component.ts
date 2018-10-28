import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() scoreData: any;
  @Output() formTransmit: EventEmitter<any>;

  constructor() {
    this.formTransmit = new EventEmitter();
  }

  ngOnInit() {
  }

}
