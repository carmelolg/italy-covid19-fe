import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardHospitalizedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getIntensiveCare() {
    const url = this.baseUrl + 'italy/total/intensive-care';
    return this.http.get(url);
  }

  getHospitalized() {
    const url = this.baseUrl + 'italy/total/hospitalized';
    return this.http.get(url);
  }


}
