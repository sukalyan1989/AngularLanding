import { Component, OnInit,Input } from "@angular/core";
import * as CanvasJS from "src/assets/CanvasJS.min";
import { TotalStudentService, TotalStudent } from "../total-student.service";
import * as _ from "lodash";
@Component({
  selector: "app-total-student",
  templateUrl: "./total-student.component.html",
  styleUrls: ["./total-student.component.css"]
})
export class TotalStudentComponent implements OnInit {
  @Input() schoolInfo;
  totalStudentArray = new Array();
  constructor(public tsService: TotalStudentService) {
    
  }

  ngOnInit() {
    // this.totalStudentArray=[];
    // this.tsService.getTotalStudents(this.schoolInfo.name).subscribe(data => {
    //   data["d"].results.forEach(x => {
    //     let totalStudentObj: TotalStudent = {
    //       year: x.Year,
    //       boys: x.Boys,
    //       girls: x.Girls,
    //       total: x.Total
    //     };

    //     this.totalStudentArray.push(totalStudentObj);
    //   });
    // });
  }

  ngOnChanges() {
    this.totalStudentArray=[];
    this.tsService.getTotalStudents(this.schoolInfo.name).subscribe(data => {
      data["d"].results.forEach(x => {
        let totalStudentObj: TotalStudent = {
          year: x.Year,
          boys: x.Boys,
          girls: x.Girls,
          total: x.Total
        };

        this.totalStudentArray.push(totalStudentObj);
      });
    });
  }
}
