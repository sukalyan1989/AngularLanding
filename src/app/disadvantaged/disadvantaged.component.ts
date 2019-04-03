import { Component, OnInit,Input } from "@angular/core";
import { DisadvantagedService, disadvantaged } from "../disadvantaged.service";

@Component({
  selector: "app-disadvantaged",
  templateUrl: "./disadvantaged.component.html",
  styleUrls: ["./disadvantaged.component.css"]
})
export class DisadvantagedComponent implements OnInit {
  @Input() schoolInfo;
  disArray=new Array();
  constructor(public disService: DisadvantagedService) {
      }

  ngOnInit() {
// this.disArray=[];
//     this.disService.getDisadvantagedData(this.schoolInfo.name).subscribe(data=>{
//       data["d"].results.forEach(x => {
//        let disObj:disadvantaged ={
//         boys:x.Boys,
//         girls:x.Girls,
//         type:x.SEND_x0020_Code,
//         total:x.Total
//        }
//        this.disArray.push(disObj);
        
//       });
//       console.log(this.disArray);
//     });
  }
  
  ngOnChanges() {
    this.disArray=[];
    this.disService.getDisadvantagedData(this.schoolInfo.name).subscribe(data=>{
      data["d"].results.forEach(x => {
       let disObj:disadvantaged ={
        boys:x.Boys,
        girls:x.Girls,
        type:x.SEND_x0020_Code,
        total:x.Total
       }
       this.disArray.push(disObj);
        
      });
      console.log(this.disArray);
    });
  }
}
