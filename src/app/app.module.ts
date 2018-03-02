import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesService } from './courses.service';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    Newcomponent2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
