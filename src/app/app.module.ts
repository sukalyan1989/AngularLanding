import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ExclusionsComponent } from './exclusions/exclusions.component';
import { DisadvantagedComponent } from './disadvantaged/disadvantaged.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TotalStudentComponent } from './total-student/total-student.component';
import { ClassificationComponent } from './classification/classification.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AttendenceComponent,
    ExclusionsComponent,
    DisadvantagedComponent,
    ProgressbarComponent,
    TotalStudentComponent,
    ClassificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
