import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionInfectedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getGrowthRates(name) {
    const url = this.baseUrl + 'region/' + name + '/growthRate';
    return this.http.get(url);
  }

  getNewCases(name) {
    const url = this.baseUrl + 'region/' + name + '/total';
    return this.http.get(url);
  }

  getTotalPositive(name) {
    const url = this.baseUrl + 'region/' + name + '/total/positive';
    return this.http.get(url);
  }

  getNewCasesVariation(name) {
    const url = this.baseUrl + 'region/' + name + '/total/new/variation';
    return this.http.get(url);
  }
}
