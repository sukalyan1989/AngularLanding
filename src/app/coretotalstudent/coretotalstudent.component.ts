import { COREService } from './../core.service';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-coretotalstudent',
  templateUrl: './coretotalstudent.component.html',
  styleUrls: ['./coretotalstudent.component.css']
})
export class CoretotalstudentComponent implements OnInit {

  subscription;
  graphDataSet = [];
  labelDataSet = [];
  constructor(private core : COREService) { }
 
  ngOnInit() {

    this.subscription=  this.core.getCoreTotal().subscribe(data => {
      this.graphDataSet = [
        { data: _.map(data, "Arena") , label: "Arena" },
        { data: _.map(data, "Central"), label: "Central" },
        { data: _.map(data, "City"), label: "City" },
        { data: _.map(data, "JQA"), label: "JQA" },
        { data: _.map(data, "Rockwood"), label: "Rockwood" }
      ];
      this.labelDataSet=_.map(data,"Type");
     
    });






  }

}
