import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionHealedService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHealed(name) {
    const url = this.baseUrl + 'region/' + name + '/total/recovered';
    return this.http.get(url);
  }
}
