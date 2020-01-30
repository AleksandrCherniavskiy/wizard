import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() informationControl: FormGroup;
  authorArray = ['Author 1', 'Author 2', 'Author 3'];

  constructor() { }

  ngOnInit() {
  }

}
