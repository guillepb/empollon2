import {
  Component,
  HostBinding,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui segment';
  @Output() setSelected: EventEmitter<any[]>;

  facDropdownOptions: any[];
  setSelectOptions: any[];
  selectedFac: any[];
  selectedCluster: any[];
  hideClusterSelect = false;

  constructor(private apiService: ApiService) {
    this.setSelected = new EventEmitter();
  }

  ngOnInit() {
    this.apiService.getFacs().subscribe(res => {
      this.facDropdownOptions = res;
    });
  }

  onFacSelect(obj: any[]): void {
    // preselect núcleo when there is only one
    if (obj['nucleos'].length === 1) {
      this.selectedCluster = obj['nucleos'][0];
      this.onClusterSelect(this.selectedCluster);
      this.hideClusterSelect = true;
     } else {
      delete this.selectedCluster;
      this.hideClusterSelect = false;
     }
  }

  onClusterSelect(obj: any[]): void {
    this.apiService.getSetsFromCluster(obj['id']).subscribe(res => this.setSelectOptions = res);
  }
}
