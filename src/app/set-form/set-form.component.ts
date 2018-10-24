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
  dropdownOptions = [
    {
      'id': 1,
      'icaocode': 'LECB',
      'nombre': 'ACC Barcelona',
      'nucleos': [
        {
          'id': 1,
          'nombre': 'Ruta E',
          'dependenciaId': 1
        },
        {
          'id': 2,
          'nombre': 'Ruta W',
          'dependenciaId': 1
        }
      ]
    },
    {
      'id': 2,
      'icaocode': 'LEBL',
      'nombre': 'Torre Barcelona',
      'nucleos': [
        {
          'id': 3,
          'nombre': 'Torre Barcelona',
          'dependenciaId': 2
        }
      ]
    }
  ];
  selectedDep: any[];
  selectedNuc: any[];
  hideNucSelect: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDepSelect(obj: any[]): void {
    // preselect nucleo when there is only one
    if (obj['nucleos'].length === 1) {
      this.selectedNuc = obj['nucleos'][0];
      this.hideNucSelect = true;
     } else {
      delete this.selectedNuc;
      this.hideNucSelect = false;
     }
  }
}
