import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardHealedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHealed() {
    const url = this.baseUrl + 'italy/total/recovered';
    return this.http.get(url);
  }
}
