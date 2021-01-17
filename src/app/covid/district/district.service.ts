import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getMigrationDate() {
    const url = this.baseUrl + 'district/file/last';
    return this.http.get<any>(url);
  }

  public getDistrictList() {
    const url = this.baseUrl + 'districts';
    return this.http.get<any>(url);
  }
}
