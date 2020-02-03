import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-last-screen',
  templateUrl: './last-screen.component.html',
  styleUrls: ['./last-screen.component.scss']
})
export class LastScreenComponent implements OnInit {
  @Input() bookAdded: boolean;
  @Output() addAnotherBook = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
