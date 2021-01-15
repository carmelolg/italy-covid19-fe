import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardTestsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getTests() {
    const url = this.baseUrl + 'italy/total/test';
    return this.http.get(url);
  }

}
