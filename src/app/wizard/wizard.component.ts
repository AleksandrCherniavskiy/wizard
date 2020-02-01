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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.genresArray = GenresArray;
    this.subgenresArray = SubgenresArray;
    this.stepsArray = StepsArray;

    this.form = this.formBuilder.group({
      genre: [null, Validators.required],
      subgenre: [null, Validators.required],
      newSubgenre: this.formBuilder.group({
        subgenreName: ['', Validators.required],
        descriptionIsRequired: false
      }),
      information: this.formBuilder.group({
        bookTitle: ['', Validators.required],
        author: ['', Validators.required],
        isbn: ['', Validators.required],
        publisher: ['', Validators.required],
        datePublished: ['', Validators.required],
        numberOfPages: ['', Validators.required],
        format: ['', Validators.required],
        edition: ['', Validators.required],
        editionLanguage: ['', Validators.required],
        description: ['', Validators.required]
      })
    });

    this.form.get('subgenre').valueChanges
      .pipe(filter(({id}: Subgenre) => id === null))
      .subscribe(() => {
        this.stepsArray[2].isVisible = false;
        this.stepsArray[3].isVisible = true;
        this.stepsArray[4].isVisible = true;
      });
    }
}
