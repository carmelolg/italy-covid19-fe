import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictInfectedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTotalPositive(name) {
    const url = this.baseUrl + 'district/' + name + '/total';
    return this.http.get(url);
  }

}
