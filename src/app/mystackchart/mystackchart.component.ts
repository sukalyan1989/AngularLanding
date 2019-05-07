import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { COREExclusionData } from "../core.service";

@Component({
  selector: "app-mystackchart",
  templateUrl: "./mystackchart.component.html",
  styleUrls: ["./mystackchart.component.css"]
})
export class MystackchartComponent implements OnInit {
  @Input() graphDataSet;
  @Input() labelDataSet;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      xAxes: [{ stacked: true, display: true, ticks: { fontColor: "white" },gridLines:{
        display:true,
        color:'white'
      } }],
      yAxes: [
        { stacked: true, display:true ,ticks: { fontColor: "white" }, maxBarThickness: 60,gridLines:{
          display:true,
          color:'white'
        } }
      ]
    },
    legend: {
      labels: {
        fontColor: "white"
      }
    }
  };

  public barChartType = "horizontalBar";
  public barChartLegend = true;

  constructor() {}

  ngOnInit() {
    this.graphDataSet = [{ data: [0], label: "" }];
  }
  ngOnChanges() {}
}
