import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineDeliveredService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRankingByDelivered() {
    const url = this.baseUrl + '/vaccine/ranking/delivered';
    return this.http.get<any>(url);
  }

}
