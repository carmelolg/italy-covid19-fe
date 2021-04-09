import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionVaccineService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRegionVaccineStats(name) {
    const url = this.baseUrl + 'vaccine/region/' + name + '/stats';
    return this.http.get<any>(url);
  }

  public getRegionVaccineData(name) {
    const url = this.baseUrl + 'vaccine/region/' + name;
    return this.http.get<any>(url);
  }

  public getRegionSomministrationPoint(name) {
    const url = this.baseUrl + 'vaccine/region/' + name + '/somministration_point';
    return this.http.get<any>(url);
  }

}
