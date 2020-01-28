import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { Genre, Subgenre, Step } from '../core/models/model';
import { GenresArray } from '../core/models/genres-array';
import { SubgenresArray } from '../core/models/subgenres-array';
import { StepsArray } from '../core/models/steps-array';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  form: FormGroup;
  genresArray: Genre[];
  subgenresArray: Subgenre[];
  stepsArray: Step[];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.genresArray = GenresArray;
    this.subgenresArray = SubgenresArray;
    this.stepsArray = StepsArray;

    this.form = this._formBuilder.group({
      genre: [null, Validators.required],
      subgenre: [null, Validators.required],
      newSubgenre: this._formBuilder.group({
        subgenreName: ['', Validators.required],
        descriptionIsRequired: false
      })
    });

    this.form.get('subgenre').valueChanges
      .pipe(filter(({id}: Subgenre) => id === null))
      .subscribe(() => {
        this.stepsArray[2].isVisible = false;
        this.stepsArray[3].isVisible = true;
        this.stepsArray[4].isVisible = true;
        console.log(this.stepsArray);
      });
    }
}
