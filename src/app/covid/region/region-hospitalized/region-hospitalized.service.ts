import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionHospitalizedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHospitalized(name) {
    const url = this.baseUrl + 'region/' + name + '/total/hospitalized';
    return this.http.get(url);
  }

  getIntensiveCare(name) {
    const url = this.baseUrl + 'region/' + name + '/total/intensive-care';
    return this.http.get(url);
  }
}
