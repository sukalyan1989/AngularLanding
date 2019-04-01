import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TotalStudentService {

  constructor(private http :HttpClient) { }

  getTotalStudents(){
   return this.http.get("assets/totalstudent.json");
  }
 // getTotalStudents(){
  //   return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('TotalStudents')/items?$filter=School eq 'Arena Academy'",{
  //   headers:new HttpHeaders(
  //     {
  //       Accept: "application/json;odata=verbose"
  //     }
  //   )
  // })
   
  // }


}
export interface TotalStudent{
  year:number,
  boys:number,
  girls:number,
  total:number
}