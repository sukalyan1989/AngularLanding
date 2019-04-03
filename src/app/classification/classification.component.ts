import { Component, OnInit, Input } from "@angular/core";

import {
  ClassificationService,
  Classification
} from "../classification.service";

@Component({
  selector: "app-classification",
  templateUrl: "./classification.component.html",
  styleUrls: ["./classification.component.css"]
})
export class ClassificationComponent implements OnInit {
  @Input() schoolInfo;
  classificationArray = new Array();
  constructor(public csService: ClassificationService) {}

  ngOnInit() {
    // this.classificationArray=[];
    // this.csService.getClassification(this.schoolInfo.name).subscribe(data => {
    //   data["d"].results.forEach(x => {
    //     let csObj: Classification = {
    //       race: x.Race_x0020_and_x0020_Ethnicity,
    //       girls: x.Girls,
    //       boys: x.Boys,
    //       total: x.Total
    //     };
    //     this.classificationArray.push(csObj);
    //   });

    //   console.log(this.classificationArray);
    // });
  }
  ngOnChanges() {
    this.classificationArray=[];
    this.csService.getClassification(this.schoolInfo.name).subscribe(data => {
      data["d"].results.forEach(x => {
        let csObj: Classification = {
          race: x.Race_x0020_and_x0020_Ethnicity,
          girls: x.Girls,
          boys: x.Boys,
          total: x.Total
        };
        this.classificationArray.push(csObj);
      });

      console.log(this.classificationArray);
    });
  }
}
