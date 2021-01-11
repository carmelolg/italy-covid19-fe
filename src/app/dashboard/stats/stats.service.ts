import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getStats() {
    const url = this.baseUrl + 'italy/stats';
    return this.http.get(url);
  }

}
