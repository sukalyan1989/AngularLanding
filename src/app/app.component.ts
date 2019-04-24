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
    id: 1,
    name: "Arena Academy",
    address: "Beeches Road,Birmingham,West Midlands,B42 2PY",
    phone: "0121 729 7310",
    website: "www.arena-birmingham.academy",
    twitter: "@COREArenaAcad",
    hmName: "Kevin Rogers",
    hmEmail: "krogers@arena-birmingham.academy",
    hmMobile: "07823 354034",
    url:
      "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/arena.jpg"
  };
  schools = [
    {
      id: 1,
      name: "Arena Academy",
      address: "Beeches Road,Birmingham,West Midlands,B42 2PY",
      phone: "0121 729 7310",
      website: "www.arena-birmingham.academy",
      twitter: "@COREArenaAcad",
      hmName: "Kevin Rogers",
      hmEmail: "krogers@arena-birmingham.academy",
      hmMobile: "07823 354034",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/arena.jpg"
    },
    {
      id: 2,
      name: "Central Academy",
      address: "Newhall Street, Ladywood, Birmingham, B3 1SJ",
      phone: "0121 729 7160",
      website: "www.corecentral.academy",
      twitter: "@CORECentralAcad",
      hmName: "David Bailey",
      hmEmail: "dbailey@corecentral.academy",
      hmMobile: "07771 983540",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/central.jpg"
    },
    {
      id: 3,
      name: "RockWood Academy",
      address: "Naseby Road, Alum Rock, Birmingham, B8 3HG",
      phone: "0121 566 6500",
      website: "www.rockwood-academy.co.uk",
      twitter: "@CORERockwood",
      hmName: "Sofia Darr",
      hmEmail: "s.darr@rockwood-academy.co.uk",
      hmMobile: "07974207385",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/rockwood.jpg"
    },
    {
      id: 4,
      name: "City Academy",
      address: "23 Langley Walk, Ladywood, Birmingham, B15 2EF",
      phone: "0121 729 7100",
      website: "www.city-birmingham.academy",
      twitter: "@CORECityBham",
      hmName: "Karen Slater",
      hmEmail: "kslater@city-birmingham.academy",
      hmMobile: "07823 354052",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/city.jpg"
    },
    {
      id: 5,
      name: "Jewellery Quarter Academy(JQA)",
      address: "St George's Court, 1 Albion Street, Birmingham, B1 3AA",
      phone: "0121 729 7220",
      website: "www.jewelleryquarter.academy",
      twitter: "@COREJQAcademy",
      hmName: "Greg Williams",
      hmEmail: "gwilliams@jewelleryquarter.academy",
      hmMobile: "07823 354052",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/jqa.jpg"
    },
    {
      id: 6,
      name: "Nansen Primary School",
      address: "Naseby Road, Alum Rock,  Birmingham, B8 3HG",
      phone: "0121 389 3787",
      website: "www.jewelleryquarter.academy",
      twitter: "@CORENansen",
      hmName: "Saiqa Liaqat",
      hmEmail: "s.liaqat@nansen.bham.sch.uk",
      hmMobile: "07961119127",
      url:
        "https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/school-landing/image/nansen.jpg"
    }
  ];
  onClick(id: any) {
    this.school = this.schools.find(c => c.id == id);
    this.isOpen = !this.isOpen;
  }
}
