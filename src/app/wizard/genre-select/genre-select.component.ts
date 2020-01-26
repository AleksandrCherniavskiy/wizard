import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GenreBase, Subgenre } from '../../core/models/model';

@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.scss']
})
export class GenreSelectComponent implements OnInit {
  @Input() inputControl: FormControl;
  @Input() genresArray: GenreBase[];
  @Input() subgenreControl: FormControl;
  @Input() subgenresArray: Subgenre[];

  constructor() { }

  ngOnInit() {
    console.log(this.inputControl);
  }

}
