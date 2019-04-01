import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AttendenceService {
  constructor(private http: HttpClient) {}

  //this one can be used for today data as well as weekly or past seven days data
 // turn this on before deploying to sharepoint and turn local testing one off
// getTodayData(){
//   return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Attendance')/items?$orderBy=Created desc",{
//     headers:new HttpHeaders(
//       {
//         Accept: "application/json;odata=verbose"
//       }
//     )
//   })

// }
  

//turn this on for local testing 
  getTodayData() {
    return   this.http.get("assets/data.json")
    }
  
    // this one to be used to fetch data of whole year
    getYearlyData(){

      return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Attendance')/items",{
            headers:new HttpHeaders(
              {
                Accept: "application/json;odata=verbose"
              }
            )
          })


  }

}
export interface attendance {
  present: number;
  absent: number;
}
