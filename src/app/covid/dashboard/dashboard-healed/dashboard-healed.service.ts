import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

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
