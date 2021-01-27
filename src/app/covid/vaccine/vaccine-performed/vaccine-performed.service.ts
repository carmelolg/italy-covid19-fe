import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccinePerformedService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getRankingByPerformed() {
    const url = this.baseUrl + '/vaccine/ranking/performed';
    return this.http.get<any>(url);
  }

}
