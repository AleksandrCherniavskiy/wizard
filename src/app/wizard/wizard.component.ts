import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { Genre, Subgenre, Step } from '../core/models/model';
import { GenresArray } from '../core/models/genres-array';
import { SubgenresArray } from '../core/models/subgenres-array';
import { StepsArray } from '../core/models/steps-array';
import {Subscription} from 'rxjs';

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
  isMultiply: boolean;
  addAnotherBook = false;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.genresArray = GenresArray;
    this.subgenresArray = SubgenresArray;
    this.stepsArray = StepsArray;

    this.form = this.formBuilder.group({
      genre: [null, Validators.required],
      subgenres: [ [], Validators.required],
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
        description: ''
      })
    });
  }

  subgenreInit() {
    this.form.get('subgenres').setValue([]);
    this.subscription = this.form.get('subgenres').valueChanges
    .pipe(filter((subgenres) => subgenres.some(({id}) => id === 0)))
    .subscribe(() => {
      this.stepsArray[2].isVisible = false;
      this.stepsArray[3].isVisible = true;
      this.stepsArray[4].isVisible = true;
    });
  }

  submitConsole() {
    this.addAnotherBook = true;
    this.subscription.unsubscribe();
    this.stepsArray[2].isVisible = true;
    this.stepsArray[3].isVisible = false;
    this.stepsArray[4].isVisible = false;

    const value = this.form.value;
    value.genre.subgenres = value.subgenres;
    delete value.subgenres;

    console.log('Form: ', this.form.value);
    console.log('this.fetchRequest = (async () => {\n' +
      '        this.requestResponse = await fetch(\'url\', {\n' +
      '          method: \'POST\',\n' +
      '          headers: {\n' +
      '            \'Content-Type\': \'application/json;charset=utf-8\'\n' +
      '          },\n' +
      '          body: JSON.stringify(this.form.value)\n' +
      '        });\n' +
      '\n' +
      '        this.requestResult = await this.requestResponse.json();\n' +
      '        alert(this.fetchRequest.message);\n' +
      '      })();');
    this.form.reset();
  }

  onAddAnotherBook() {
    this.addAnotherBook = false;
  }
}
