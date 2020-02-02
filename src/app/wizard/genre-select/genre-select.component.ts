import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GenreBase } from '../../core/models/model';

@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.scss']
})
export class GenreSelectComponent {
  @Input() inputControl: FormControl;
  @Input() items: GenreBase[];
  @Input() isMultiple = false;

  selectItem(item) {
    if (this.isMultiple) {
      const value = this.inputControl.value as unknown[];
      const index = value.indexOf(item);

      if (index > -1) {
        value.splice(index, 1);
      } else {
        value.push(item);
      }

      this.inputControl.setValue(value);
    } else {
      this.inputControl.setValue(item);
    }
  }

  isItemSelected(item): boolean {
    if (this.inputControl.value) {
      return this.isMultiple ? this.inputControl.value.includes(item) : this.inputControl.value === item;
    }
  }
}
