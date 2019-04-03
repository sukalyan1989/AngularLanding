import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ExclusionsService, exData } from '../exclusions.service';


@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.css']
})
export class ExclusionsComponent implements OnInit {

  @Input() schoolInfo;

  exClusionData:exData={
    FEYD:0,
    FELY:0,
    PEYD:0,
    PELY:0
  };
  
  constructor(public exService:ExclusionsService) { 
    
    
  
  }

  ngOnInit() {
    
    // this.exService.getExclusionData(this.schoolInfo.name).subscribe(data=>{
    //   this.exClusionData={
    //     FEYD:data["d"].results[0].Fixed_x0020_Year_x0020_to_x0020_,
    //     FELY:data["d"].results[0].Fixed_x0020_Last_x0020_Year,
    //     PEYD:data["d"].results[0].Permanent_x0020_Exclusions_x0020,
    //     PELY:data["d"].results[0].Permanent_x0020_Exclusions_x00200
    //   }
    //   console.log(this.exClusionData);
    // });
  
    
  }
  ngOnChanges(){
    this.exService.getExclusionData(this.schoolInfo.name).subscribe(data=>{
      this.exClusionData={
        FEYD:data["d"].results[0].Fixed_x0020_Year_x0020_to_x0020_,
        FELY:data["d"].results[0].Fixed_x0020_Last_x0020_Year,
        PEYD:data["d"].results[0].Permanent_x0020_Exclusions_x0020,
        PELY:data["d"].results[0].Permanent_x0020_Exclusions_x00200
      }
      console.log(this.exClusionData);
    });
  }


}
