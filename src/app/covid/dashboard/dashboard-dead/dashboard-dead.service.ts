import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardDeadService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getDead() {
    const url = this.baseUrl + 'italy/total/dead';
    return this.http.get(url);
  }

}
