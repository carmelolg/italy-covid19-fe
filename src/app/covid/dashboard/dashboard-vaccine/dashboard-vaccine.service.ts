import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardVaccineService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;


  public getVaccineData() {
    const url = this.baseUrl + '/vaccine/italy';
    return this.http.get<any>(url);
  }


}
