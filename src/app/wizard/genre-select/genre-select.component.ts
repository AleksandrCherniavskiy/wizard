import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select-button',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.scss']
})
export class GenreSelectComponent implements OnInit {
  @Input() inputControl: FormControl;
  genres: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit() {
    console.log(this.inputControl);
  }

}
