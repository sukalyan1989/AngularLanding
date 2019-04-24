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
import { BoxContainerComponent } from './box-container/box-container.component';
import { AttendenceService } from './attendence.service';
import { MyChartComponent } from './my-chart/my-chart.component';
import{ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AttendenceComponent,
    ExclusionsComponent,
    DisadvantagedComponent,
    ProgressbarComponent,
    TotalStudentComponent,
    ClassificationComponent,
    BoxContainerComponent,
    MyChartComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [AttendenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
