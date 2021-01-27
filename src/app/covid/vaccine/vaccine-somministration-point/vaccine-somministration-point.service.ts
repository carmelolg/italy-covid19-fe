import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineSomministrationPointService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  public getSomministrationPoints() {
    const url = this.baseUrl + '/vaccine/italy/somministration_point';
    return this.http.get<any>(url);
  }

}
