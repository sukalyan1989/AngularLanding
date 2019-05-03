import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystackchart',
  templateUrl: './mystackchart.component.html',
  styleUrls: ['./mystackchart.component.css']
})
export class MystackchartComponent implements OnInit {

public ChartLabels = [];
public ChartType='bar';
public ChartLegend=false;
public ChartData=[{
  label: 'Dataset 1',
  backgroundColor: 'rgb(0,0,255)',
  data: [
    10,
    10,
    10,
    10,
    10,
    10,
    10
  ]
}, {
  label: 'Dataset 2',
  backgroundColor: 'rgb(0,255,0)',
  data: [
    20,
    20,
    20,
    20,
    20,
    20,
    20
  ]
}, {
  label: 'Dataset 3',
  backgroundColor: 'rgb(255,0,0)',
  data: [
    30,
    30,
    30,
    30,
    30,
    30,
    30
  ]
}]
public ChartOptions={scales: {
  xAxes: [{
    stacked: true,
  }],
  yAxes: [{
    stacked: true
  }]
}
}

  constructor() {
    
   }

  ngOnInit() {
  }

}
