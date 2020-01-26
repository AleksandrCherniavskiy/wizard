import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Genre, Subgenre} from '../core/models/model';

import { GenresArray } from '../core/models/genres-array';
import { SubgenresArray } from '../core/models/subgenres-array';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  form: FormGroup;
  genresArray: Genre[];
  subgenresArray: Subgenre[];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.genresArray = GenresArray;
    this.subgenresArray = SubgenresArray;
    this.form = this._formBuilder.group({
      genre: [null, Validators.required],
      subgenre: [null, Validators.required]
    });
    // console.warn(this.form.value);
    }
}
