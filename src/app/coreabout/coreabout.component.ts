import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coreabout',
  templateUrl: './coreabout.component.html',
  styleUrls: ['./coreabout.component.css']
})
export class CoreaboutComponent implements OnInit {
  @Input() allSchoolInfo;
  constructor() { }

  ngOnInit() {
  }

}
