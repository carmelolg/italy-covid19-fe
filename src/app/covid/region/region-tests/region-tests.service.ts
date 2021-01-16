import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionTestsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTests(name) {
    const url = this.baseUrl + 'region/' + name + '/total/test';
    return this.http.get(url);
  }

}
