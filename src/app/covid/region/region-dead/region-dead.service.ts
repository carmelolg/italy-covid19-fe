import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionDeadService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDead(name) {
    const url = this.baseUrl + 'region/' + name + '/total/dead';
    return this.http.get(url);
  }
}
