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


}
