import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardInfectedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


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
