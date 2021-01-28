import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRankingByPerformed() {
    const url = this.baseUrl + '/vaccine/ranking/performed';
    return this.http.get<any>(url);
  }

  public getRankingByDelivered() {
    const url = this.baseUrl + '/vaccine/ranking/delivered';
    return this.http.get<any>(url);
  }

  public getVaccineData() {
    const url = this.baseUrl + '/vaccine/italy';
    return this.http.get<any>(url);
  }
}
