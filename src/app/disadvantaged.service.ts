import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisadvantagedService {

  constructor(private http : HttpClient) { }

  getDisadvantagedData(){
    return this.http.get("assets/disadvantaged.json");
  }

  // getDisadvantagedData(){
  //   return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Disadvantaged')/items?$filter=School eq 'Arena Academy'&$orderBy=SEND_x0020_Code",{
  //   headers:new HttpHeaders(
  //     {
  //       Accept: "application/json;odata=verbose"
  //     }
  //   )
  // })

  // }
 test(){
   return"blah";
 }


}

export interface disadvantaged {
  boys:number,
  girls:number,
  type:string,
  total:number
}