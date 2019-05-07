import { Component, OnInit } from '@angular/core';
import { COREService } from '../core.service';
import * as _ from "lodash";
@Component({
  selector: 'app-coreattendence',
  templateUrl: './coreattendence.component.html',
  styleUrls: ['./coreattendence.component.css']
})
export class CoreattendenceComponent implements OnInit {

  subscription;
  graphDataSet = [];
  labelDataSet = [];
  constructor(private core:COREService) { }

  ngOnInit() {
    this.subscription=  this.core.getCoreAttendence().subscribe(data => {
        this.graphDataSet = [
          { data: _.map(data, "Arena") , label: "Arena" },
          { data: _.map(data, "Central"), label: "Central" },
          { data: _.map(data, "City"), label: "City" },
          { data: _.map(data, "JQA"), label: "JQA" },
          { data: _.map(data, "Nansen"), label: "Nansen" },
          { data: _.map(data, "Rockwood"), label: "Rockwood" }
        ];
        this.labelDataSet=_.map(data,"Type");
       
      });
    }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
