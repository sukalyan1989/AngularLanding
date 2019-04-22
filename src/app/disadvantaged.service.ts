import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisadvantagedService {

  constructor(private http : HttpClient) { }

  getDisadvantagedData(a:any){
    return this.http.get("assets/disadvantaged.json");
  }

  // getDisadvantagedData(schoolName){
  //   return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Disadvantaged')/items?$filter=School eq '"+schoolName+"'&$orderBy=SEND_x0020_Code",{
  //   headers:new HttpHeaders(
  //     {
  //       Accept: "application/json;odata=verbose"
  //     }
  //   )
  // })

  // }



}

export interface disadvantaged {
  boys:number,
  girls:number,
  type:string,
  total:number
}