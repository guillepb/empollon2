import {
  Component,
  HostBinding,
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
  depDropdownOptions: any[];
  temaSelectOptions: any[];
  selectedDep: any[];
  selectedNuc: any[];
  hideNucSelect = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDeps().subscribe(res => this.depDropdownOptions = res);
  }

  onDepSelect(obj: any[]): void {
    // preselect nucleo when there is only one
    if (obj['nucleos'].length === 1) {
      this.selectedNuc = obj['nucleos'][0];
      this.onNucSelect(this.selectedNuc);
      this.hideNucSelect = true;
     } else {
      delete this.selectedNuc;
      this.hideNucSelect = false;
     }
  }

  onNucSelect(obj: any[]): void {
    console.log(obj);
    this.apiService.getTemasFromNuc(obj['id']).subscribe(res => this.temaSelectOptions = res);
  }
}
