import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExclusionsService {

  constructor(private http : HttpClient) { }

  getExclusionData(){

    return this.http.get("assets/exclusion.json");
  }

  // getExclusionData(){
  //   return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Exclusions')/items?$filter=School eq 'Arena Academy'",{
  //   headers:new HttpHeaders(
  //     {
  //       Accept: "application/json;odata=verbose"
  //     }
  //   )
  // })
   
  // }
  
}
export interface exData{
  FEYD:number,
  FELY:number,
  PEYD:number,
  PELY:number

}