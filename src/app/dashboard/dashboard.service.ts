import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getResume() {
    const url = this.baseUrl + 'italy/resume';
    return this.http.get(url, { params: { all: 'true' } });
  }

  getGrowthRates() {
    const url = this.baseUrl + 'italy/growthRate';
    return this.http.get(url);
  }

  getNewCases() {
    const url = this.baseUrl + 'italy/total/new';
    return this.http.get(url);
  }

  getTotalPositive() {
    const url = this.baseUrl + 'italy/total/positive';
    return this.http.get(url);
  }

  getNewCasesVariation() {
    const url = this.baseUrl + 'italy/total/new/variation';
    return this.http.get(url);
  }

}
