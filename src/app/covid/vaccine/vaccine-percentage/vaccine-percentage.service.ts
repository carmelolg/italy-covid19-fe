import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccinePercentageService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRankingBySomministrationPercentage() {
    const url = this.baseUrl + '/vaccine/ranking/somministration';
    return this.http.get<any>(url);
  }

}
