import { COREService, COREExclusionData } from "./../core.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-coreexclusions",
  templateUrl: "./coreexclusions.component.html",
  styleUrls: ["./coreexclusions.component.css"]
})
export class CoreexclusionsComponent implements OnInit {
  subscription;
  graphDataSet = [];
  labelDataSet = [];
  
  constructor(private core: COREService) {}

  ngOnInit() {
  this.subscription=  this.core.getCoreExclusions().subscribe(data => {
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
