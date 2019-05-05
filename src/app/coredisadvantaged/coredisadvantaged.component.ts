import { COREService } from './../core.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-coredisadvantaged',
  templateUrl: './coredisadvantaged.component.html',
  styleUrls: ['./coredisadvantaged.component.css']
})
export class CoredisadvantagedComponent implements OnInit {

  graphDataSet = [];
  labelDataSet = [];
  constructor(private core : COREService) { }

  ngOnInit() {
    this.core.getCoreDisadvantaged().subscribe(data => {
      this.graphDataSet = [
        { data: _.map(data, "Arena") , label: "Arena" },
        { data: _.map(data, "Central"), label: "Central" },
        { data: _.map(data, "City"), label: "City" },
        { data: _.map(data, "JQA"), label: "JQA" },
        { data: _.map(data, "Nansen"), label: "Nansen" },
        { data: _.map(data, "Rockwood"), label: "Rockwood" }
      ];
      this.labelDataSet=_.map(data,"Type");
      console.log(this.graphDataSet)
      console.log(this.labelDataSet)
    })
  }

}
