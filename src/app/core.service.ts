import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class COREService {
  constructor(private http: HttpClient) {}

//method for getting Exclusions data for core
  getCoreExclusions(): Observable<any> {
    return this.http.get("assets/COREExclusion.json").pipe(
      map(data => {
        return data["d"].results.map(x => {
          let total =
            parseInt(x["Arena"]) +
            parseInt(x["Central"]) +
            parseInt(x["City"]) +
            parseInt(x["JQA"]) +
            parseInt(x["Nansen"]) +
            parseInt(x["Rockwood"]);
          let obj: object = {
            Arena: Math.round((parseInt(x["Arena"]) / total) * 100),
            Central: Math.round((parseInt(x["Central"]) / total) * 100),
            City: Math.round((parseInt(x["City"]) / total) * 100),
            JQA: Math.round((parseInt(x["JQA"]) / total) * 100),
            Nansen: Math.round((parseInt(x["Nansen"]) / total) * 100),
            Rockwood: Math.round((parseInt(x["Rockwood"]) / total) * 100),
            Type: x["ExclusionType"]
          };
          return obj;
        });
      })
    );
  }

//method to get disadvantaged data for CORE
  getCoreDisadvantaged(): Observable<any> {
    return this.http.get("assets/COREDisadvantaged.json").pipe(
      map(data => {
        return data["d"].results.map(x => {
          let total =
            parseInt(x["Arena"]) +
            parseInt(x["Central"]) +
            parseInt(x["City"]) +
            parseInt(x["JQA"]) +
            parseInt(x["Nansen"]) +
            parseInt(x["Rockwood"]);
          let obj: object = {
            Arena: Math.round((parseInt(x["Arena"]) / total) * 100),
            Central: Math.round((parseInt(x["Central"]) / total) * 100),
            City: Math.round((parseInt(x["City"]) / total) * 100),
            JQA: Math.round((parseInt(x["JQA"]) / total) * 100),
            Nansen: Math.round((parseInt(x["Nansen"]) / total) * 100),
            Rockwood: Math.round((parseInt(x["Rockwood"]) / total) * 100),
            Type: x["Code"]
          };
          return obj;
        });
      })
    );
  }


















}

export interface COREExclusionData {
  Arena?: any[];
  Central?: any[];
  City?: any[];
  JQA?: any[];
  Nansen?: any[];
  Rockwood?: any[];
  Type?: string[];
}
