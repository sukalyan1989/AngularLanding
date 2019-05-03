import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystackchart',
  templateUrl: './mystackchart.component.html',
  styleUrls: ['./mystackchart.component.css']
})
export class MystackchartComponent implements OnInit {

  public barChartOptions = {
    stacked100:{enable:true},
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true ,display:false}],
      yAxes: [{ stacked: true }]
    }
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 10, 70, 30, 50, 30, 40], label: 'Series A'},
    {data: [25, 75, 20, 40, 25, 28, 45], label: 'Series B'},
    {data: [10, 15, 10, 30, 25, 42, 15], label: 'Series C'}
  ];
  constructor() {
    
   }

  ngOnInit() {
  }

}
