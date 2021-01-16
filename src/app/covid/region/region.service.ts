import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRegionResume(name: string) {
    const url = this.baseUrl + 'region/' + name + '/resume';
    return this.http.get<any>(url, { params: { all: 'true' } });
  }

  public getMigrationDate() {
    const url = this.baseUrl + 'region/file/last';
    return this.http.get<any>(url);
  }

  public getRegionList() {
    const url = this.baseUrl + 'regions';
    return this.http.get<any>(url);
  }

}
