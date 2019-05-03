import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css']
})
export class BoxContainerComponent implements OnInit {

  
  @Input() schoolInfo;
  @Input() isCORE:boolean;
  constructor() { }

  ngOnInit() { 
  }

}
