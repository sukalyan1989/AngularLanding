import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "src/assets/CanvasJS.min";
import { ClassificationService, Classification } from '../classification.service';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
@Component({
  selector: "app-classification",
  templateUrl: "./classification.component.html",
  styleUrls: ["./classification.component.css"]
})
export class ClassificationComponent implements OnInit {
  classificationArray=new Array();
  constructor(csService : ClassificationService) {
    csService.getClassification().subscribe(data=>{
      
      data["d"].results.forEach(x => {
        let csObj:Classification={
          race:x.Race_x0020_and_x0020_Ethnicity,
          girls:x.Girls,
          boys:x.Boys,
          total:x.Total
        }
        this.classificationArray.push(csObj);
      });

console.log(this.classificationArray)


    })

  }

  ngOnInit() {}
}
