import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() informationControl: FormGroup;
  @Input() descriptionIsRequiredControl: FormControl;

  authorArray = ['Author 1', 'Author 2', 'Author 3'];
  publisherArray = ['Publisher 1', 'Publisher 2', 'Publisher 3'];
  formatArray = ['Format 1', 'Format 2', 'Format 3'];
  editionLanguageArray = ['Edition language 1', 'Edition language 2', 'Edition language 3'];

  constructor() { }

  ngOnInit() {
  }

}
