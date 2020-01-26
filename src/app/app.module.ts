import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenreSelectComponent } from './wizard/genre-select/genre-select.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    GenreSelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
