import {
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent implements OnInit {
  @Output() formCompleted: EventEmitter<any>;

  quizSetupForm = this.fb.group({
    facility: [''],
    cluster: [''],
    quizContent: this.fb.group({
      sets: [''],
      shuffleAnswers: false,
      shuffleQuestions: true
    })
  });

  facilityOptions: any[];
  clusterOptions: any[];
  setSelectOptions: any[];

  showClusterSelect = false;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.formCompleted = new EventEmitter();
  }

  ngOnInit() {
    // get facilities (and embedded clusters) from api
    this.apiService.getFacs().subscribe(res => {
      this.facilityOptions = res;
      console.log(this.facilityOptions);
    });

    // watch facility for changes to populate clusters (núcleos)
    this.quizSetupForm.controls['facility'].valueChanges.subscribe(
      (fac: FormControl) => {
        this.clusterOptions = fac['nucleos'];
        // preselect cluster (núcleo) when there is only one
        if (this.clusterOptions.length === 1) {
          this.quizSetupForm.controls['cluster'].setValue(this.clusterOptions[0]);
          this.showClusterSelect = false;
        } else {
          this.quizSetupForm.controls['cluster'].reset();
          this.showClusterSelect = true;
        }
      }
    );

    // watch cluster (núcleo) for changes to populate sets (temas)
    this.quizSetupForm.controls['cluster'].valueChanges.subscribe(
      (cluster: FormControl) => {
        // reset sets (temas)
        delete this.setSelectOptions;
        this.quizSetupForm.get('quizContent.sets').reset();
        if (cluster) {
          this.apiService.getSetsFromCluster(cluster['id']).subscribe(res => {
            this.setSelectOptions = res;
            console.log(this.setSelectOptions);
          });
        }
      }
    );

    // watch quizSetup formgroup for changes to send info to quiz component
    this.quizSetupForm.controls['quizContent'].valueChanges.subscribe(
      (formGroup: FormGroup) => {
        this.formCompleted.emit(formGroup);
      }
    );
  }
}
