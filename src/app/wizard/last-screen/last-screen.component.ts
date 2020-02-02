import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-screen',
  templateUrl: './last-screen.component.html',
  styleUrls: ['./last-screen.component.scss']
})
export class LastScreenComponent implements OnInit {
  @Input() bookAdded: boolean;
  constructor() { }

  ngOnInit() {
  }

}
