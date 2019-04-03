import { Component, OnInit, Input } from "@angular/core";
import { AttendenceService, attendance } from "../attendence.service";
import * as _ from "lodash";



@Component({
  selector: "app-attendence",
  templateUrl: "./attendence.component.html",
  styleUrls: ["./attendence.component.css"]
})
export class AttendenceComponent implements OnInit {

  @Input() schoolInfo;

  attendanceToday: attendance = { present: 0, absent: 0 };
  attendanceOverAll: attendance = { present: 0, absent: 0 };
  attendanceWeekly:attendance={present:0,absent:0};

  constructor(public atService: AttendenceService) {
   
 
  }
  info: string;


  ngOnInit() {
    this.atService.getTodayData(this.schoolInfo.name).subscribe(data => {
        let length = data["d"].results.length;
  
        let weekPresentArray=new Array();
        let weekAbsentArray = new Array();
  
        let presentArray = new Array();
        let absentArray = new Array();
        this.attendanceToday = {
          present: data["d"].results[0].Today,
          absent: data["d"].results[0].Absent
        };
        data["d"].results.forEach(x => {
          presentArray.push(parseInt(x.Today));
          absentArray.push(parseInt(x.Absent));
        });
        weekPresentArray=_.slice(presentArray,0,7);
        weekAbsentArray=_.slice(absentArray,0,7);
  
        let weekAvgPresent = _.sum(weekPresentArray)/7;
        let weekAvgAbsent = _.sum(weekAbsentArray)/7;
        
  
        let avgPresent = _.sum(presentArray) / length;
        let avgAbsent = _.sum(absentArray) / length;
  
        this.attendanceWeekly={
          present:weekAvgPresent,
          absent:weekAvgAbsent
        }
        this.attendanceOverAll = {
          present: avgPresent,
          absent: avgAbsent
        };
  
        
      });
  }
  
  ngOnChanges(){
    this.atService.getTodayData(this.schoolInfo.name).subscribe(data => {
      let length = data["d"].results.length;

      let weekPresentArray=new Array();
      let weekAbsentArray = new Array();

      let presentArray = new Array();
      let absentArray = new Array();
      this.attendanceToday = {
        present: data["d"].results[0].Today,
        absent: data["d"].results[0].Absent
      };
      data["d"].results.forEach(x => {
        presentArray.push(parseInt(x.Today));
        absentArray.push(parseInt(x.Absent));
      });
      weekPresentArray=_.slice(presentArray,0,7);
      weekAbsentArray=_.slice(absentArray,0,7);

      let weekAvgPresent = _.sum(weekPresentArray)/7;
      let weekAvgAbsent = _.sum(weekAbsentArray)/7;
      

      let avgPresent = _.sum(presentArray) / length;
      let avgAbsent = _.sum(absentArray) / length;

      this.attendanceWeekly={
        present:weekAvgPresent,
        absent:weekAvgAbsent
      }
      this.attendanceOverAll = {
        present: avgPresent,
        absent: avgAbsent
      };

      
    });
  }
}
