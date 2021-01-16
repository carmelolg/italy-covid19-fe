import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { RegionObservableService } from './../region-observable.service';

@Component({
  selector: 'app-regione-stats',
  templateUrl: './regione-stats.component.html',
  styleUrls: ['./regione-stats.component.css']
})
export class RegionStatsComponent implements OnInit {

  public statsData: any = {};
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private regionObservableService: RegionObservableService) { }

  ngOnInit(): void {

    this.regionObservableService.regionName$.subscribe(name => {
      this.getStats(name).subscribe(stats => {
        this.statsData = stats;
      });
    });
  }

  getStats(name) {
    this.statsData = {};
    const url = this.baseUrl + 'region/' + name + '/stats';
    return this.http.get(url);
  }

  isDataUndefined() {
    return Object.keys(this.statsData).length === 0;
  }

}
