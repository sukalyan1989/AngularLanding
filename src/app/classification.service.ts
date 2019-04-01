import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ClassificationService {
  constructor(private http: HttpClient) {}

  getClassification() {
    return this.http.get("assets/classification.json");
  }
  test(): string {
    return "baal";
  }
}
export interface Classification {
  race: string;
  girls: number;
  boys: number;
  total: number;
}
