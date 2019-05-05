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
  public barChartOptions={
    stacked100: { enable: true },
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true, display: false }],
      yAxes: [{ stacked: true }]
    }
  };
  
  public barChartType = "horizontalBar";
  public barChartLegend=true;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() { }
}
