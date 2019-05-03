import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  twitterObj={}
  @Input() schoolInfo
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(){
    this.twitterObj={
      sourceType:'url',
      url:'https://twitter.com/'+this.schoolInfo.twitter
    }
  }

  ngOnDestroy(){
    
  }
}
