import { Component, OnInit, Input } from "@angular/core";
import { DisadvantagedService, disadvantaged } from "../disadvantaged.service";
import { Chart } from "chart.js";
@Component({
  selector: "app-disadvantaged",
  templateUrl: "./disadvantaged.component.html",
  styleUrls: ["./disadvantaged.component.css"]
})
export class DisadvantagedComponent implements OnInit {
  @Input() schoolInfo;
  disArray = new Array();
  chart = [];
  constructor(public disService: DisadvantagedService) {}

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
    this.disArray = [];
    this.disService
      .getDisadvantagedData(this.schoolInfo.name)
      .subscribe(data => {
        data["d"].results.forEach(x => {
          let disObj: disadvantaged = {
            boys: x.Boys,
            girls: x.Girls,
            type: x.SEND_x0020_Code,
            total: x.Total
          };
          this.disArray.push(disObj);
        });
        this.createChart("canvas1", [
          this.disArray[0].boys,
          this.disArray[0].girls
        ]);
        this.createChart("canvas2", [
          this.disArray[1].boys,
          this.disArray[1].girls
        ]);
        this.createChart("canvas3", [
          this.disArray[2].boys,
          this.disArray[2].girls
        ]);
        console.log(this.disArray);
      });
  }

  createChart(can: string, arr: any[]) {
    this.chart = new Chart(can, {
      type: "doughnut",
      data: {labels: ["Boys", "Girls"],
        datasets: [
          {
            backgroundColor: ["rgba(56, 216, 212,1)", "rgba(238, 74, 145, 1)"],
            data: arr,
            borderColor: ["rgba(56, 216, 212,1)", "rgba(238, 74, 145, 1)"],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false,
          position: "bottom"
        },
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        }
      }
    });
  }
}
