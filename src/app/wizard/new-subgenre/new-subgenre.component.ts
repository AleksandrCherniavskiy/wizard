import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-subgenre',
  templateUrl: './new-subgenre.component.html',
  styleUrls: ['./new-subgenre.component.scss']
})
export class NewSubgenreComponent implements OnInit {
  @Input() newSubgenreControl: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
