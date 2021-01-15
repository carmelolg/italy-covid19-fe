import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {DashBoardService} from './dashboard.service';
import {environment} from '../../../environments/environment';
import {ChartService} from '../../charts/chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private chartService: ChartService, private dashboardService: DashBoardService) { }

  public migrationDate;
  public resumeData: any = {};

  private baseUrl: string = environment.baseUrl;

  ngOnInit() {
    this.getMigrationDate();
    this.getResume();

  }

  private getMigrationDate() {

    this.http.get<any>(this.baseUrl + 'italy/file/last').subscribe(data => {
      if (data != null && data.date != null) {
        this.migrationDate = new Date(data.date);
      }
    });

  }

  private getResume() {
    this.dashboardService.getResume().subscribe((data: any) => {
      this.resumeData = data;
    });
  }

  public changeTabHandler(): void {
    this.chartService.updateChartModel();
  }



}
