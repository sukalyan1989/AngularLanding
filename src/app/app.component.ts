import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  encapsulation:ViewEncapsulation.None
})

export class AppComponent {
  trayWidth:number=0;
  isOpen:boolean=false;
  school={
    name:"none",
    address:"none",
    phone:"none"
  }
  schools=[{
            id:1,
            name:"Arena Academy",
            address:"Beeches Road,Birmingham,West Midlands,B42 2PY",
            phone:"0121 729 7310"},
            {
              id:2,
              name:"Central Academy",
              address:"Salt Lake City Kolkata",
              phone:"123 456 789"}
        
        ]
 onClick(id:any){
  this.school=this.schools.find(c=>c.id==id);
    this.trayWidth=90;
 }
}
