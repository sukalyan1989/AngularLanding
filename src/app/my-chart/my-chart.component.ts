import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css'] 
})
export class MyChartComponent implements OnInit {

@Input() ChartData;
@Input()ChartName;
public ChartLabels = ['Boys','Girls'];
public ChartType='doughnut';
public ChartLegend=false;
public ChartOptions={
  title:{
  display:true,
  text:this.ChartName==null?'True':this.ChartName
}}
  

  constructor() { }

  ngOnInit() {

  }
  ngOnChange(){
    console.log(this.ChartName)
    this.ChartOptions={
      title:{
        display:true,
        text:this.ChartName

      }
    }

  }

}
