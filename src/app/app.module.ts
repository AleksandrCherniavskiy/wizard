import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { GenreSelectComponent } from './wizard/genre-select/genre-select.component';
import { NewSubgenreComponent } from './wizard/new-subgenre/new-subgenre.component';
import { InformationComponent } from './wizard/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    GenreSelectComponent,
    NewSubgenreComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
