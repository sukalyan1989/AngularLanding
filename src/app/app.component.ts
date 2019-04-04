import { Component, ViewEncapsulation } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
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

  school = {
    name: "Arena Academy",
    address: "Beeches Road,Birmingham,West Midlands,B42 2PY",
    phone: "0121 729 7310",
    hmName: "Mr. Arena",
    hmEmail: "arena@school.com",
    url:
      "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/arena.jpg"
  };
  schools = [
    {
      id: 1,
      name: "Arena Academy",
      address: "Beeches Road,Birmingham,West Midlands,B42 2PY",
      phone: "0121 729 7310",
      hmName: "Mr. Arena",
      hmEmail: "arena@school.com",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/arena.jpg"
    },
    {
      id: 2,
      name: "Central Academy",
      address: "Salt Lake City Kolkata",
      phone: "123 456 789",
      hmName: "Mr. Central",
      hmEmail: "central@school.com",
      url:
        "http://www.climat.com.au/wp-content/themes/climat/images/carrier_logo.png"
    }
  ];
  onClick(id: any) {
    this.school = this.schools.find(c => c.id == id);
    this.isOpen = !this.isOpen;
  }
}
