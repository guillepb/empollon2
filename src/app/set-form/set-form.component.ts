import {
  Component,
  HostBinding,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui segment';

  constructor() { }

  ngOnInit() {
  }

}
