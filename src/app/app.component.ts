import { Component, ViewEncapsulation } from '@angular/core';
import {trigger,state,  style,  animate,  transition} from '@angular/animations';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //      position:'absolute',
  //      left:'100px'
        
  //     })),
  //     state('closed', style({
  //       left:'1400px'
       
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('1s')
  //     ]),
  //   ]),
  // ],
})

export class AppComponent {
  isOpen = false;
  
  school={
    name:"none",
    address:"none",
    phone:"none",
    hmName:"none",
    hmEmail:"none"

  }
  schools=[{
            id:1,
            name:"Arena Academy",
            address:"Beeches Road,Birmingham,West Midlands,B42 2PY",
            phone:"0121 729 7310",
            hmName:"Mr. Arena",
            hmEmail:"arena@school.com"
            },
            {
              id:2,
              name:"Central Academy",
              address:"Salt Lake City Kolkata",
              phone:"123 456 789",
              hmName:"Mr. Central",
              hmEmail:"central@school.com"
            }
        
        ]
 onClick(id:any){
  this.school=this.schools.find(c=>c.id==id);
    this.isOpen=!this.isOpen;
 }
}
