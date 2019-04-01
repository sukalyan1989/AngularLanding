import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ClassificationService {
  constructor(private http: HttpClient) {}

  // for testing in local
  // getClassification() {
  //   return this.http.get("assets/classification.json");
  // }

getClassification(){
  return this.http.get("https://coreeducationtrust.sharepoint.com/sites/CET_Intranet/_api/lists/getByTitle('Race')/items?$filter=School eq 'Arena Academy'",{
    headers:new HttpHeaders(
      {
        Accept: "application/json;odata=verbose"
      }
    )
  })

}



  
}
export interface Classification {
  race: string;
  girls: number;
  boys: number;
  total: number;
}
