import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

@Input() ChartData;
public ChartLabels = ['Boys','Girls'];
public ChartType='doughnut';
public ChartLegend=false;
  

  constructor() { }

  ngOnInit() {
  }

}
