import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { DistrictObservableService } from '../district-observable.service';

@Component({
  selector: 'app-district-stats',
  templateUrl: './district-stats.component.html',
  styleUrls: ['./district-stats.component.css']
})
export class DistrictStatsComponent implements OnInit {

  public statsData: any = {};
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private districtObservableService: DistrictObservableService) { }

  ngOnInit(): void {

    this.districtObservableService.districtName$.subscribe(name => {
      this.getStats(name).subscribe(stats => {
        this.statsData = stats;
      });
    });
  }

  getStats(name) {
    this.statsData = {};
    const url = this.baseUrl + 'district/' + name + '/stats';
    return this.http.get(url);
  }

  isDataUndefined() {
    return Object.keys(this.statsData).length === 0;
  }

}
