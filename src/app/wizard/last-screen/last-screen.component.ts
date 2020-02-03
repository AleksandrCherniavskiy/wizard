import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-last-screen',
  templateUrl: './last-screen.component.html',
  styleUrls: ['./last-screen.component.scss']
})
export class LastScreenComponent {
  @Input() bookAdded: boolean;
  @Output() addAnotherBook = new EventEmitter();
}
