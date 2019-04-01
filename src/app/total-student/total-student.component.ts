import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "src/assets/CanvasJS.min";
import { TotalStudentService, TotalStudent } from "../total-student.service";

@Component({
  selector: "app-total-student",
  templateUrl: "./total-student.component.html",
  styleUrls: ["./total-student.component.css"]
})
export class TotalStudentComponent implements OnInit {
  totalStudentArray = new Array();
  constructor(tsService: TotalStudentService) {
    tsService.getTotalStudents().subscribe(data => {
      data["d"].results.forEach(x => {
        let totalStudentObj: TotalStudent = {
          year: x.Year,
          boys: x.Boys,
          girls: x.Girls,
          total: x.Total
        };

        this.totalStudentArray.push(totalStudentObj);
      });

      console.log(this.totalStudentArray);
    });
  }

  ngOnInit() {}
}
