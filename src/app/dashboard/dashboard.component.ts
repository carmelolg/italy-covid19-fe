import { DashBoardService } from './dashboard.service';
import { ChartService } from './chart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private chartService: ChartService, private dashboardService: DashBoardService) { }

  public migrationDate;
  public resumeData: any = {};

  public growthRatesData: any = {};
  public newCasesData: any = {};
  public newCasesVariationData: any = {};
  public totalPositiveData: any = {};

  private baseUrl: string = environment.baseUrl;

  ngOnInit() {
    this.getMigrationDate();
    this.getResume();

    this.getInfected();

  }

  private getMigrationDate() {

    this.http.get<any>(this.baseUrl + "italy/file/last").subscribe(data => {
      if (data != null && data.date != null) {
        this.migrationDate = new Date(data.date);
      }
    });

  }

  private getResume() {
    this.dashboardService.getResume().subscribe((data : any) =>{
      this.resumeData = data;
    });
  }

  private getInfected(){

    let _subs = this.dashboardService.getGrowthRates().subscribe((data: any) => {
      this.growthRatesData = data;
      _subs.unsubscribe();
    });

    let _subsNewCases = this.dashboardService.getNewCases().subscribe((data: any) => {
      this.newCasesData = data;
      _subsNewCases.unsubscribe();
    });

    let _subsNewCasesVariation = this.dashboardService.getNewCasesVariation().subscribe((data: any) => {
      this.newCasesVariationData = data;
      _subsNewCasesVariation.unsubscribe();
    });

    let _subsTotalPositive = this.dashboardService.getTotalPositive().subscribe((data: any) => {
      this.totalPositiveData = data;
      _subsTotalPositive.unsubscribe();
    });


  }

  public changeTabHandler(tab): void {
    this.chartService.updateChartModel();
  }



}
