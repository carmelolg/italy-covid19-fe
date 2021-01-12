import { Component, OnInit } from '@angular/core';
import { DashboardInfectedService } from './dashboard-infected.service';

@Component({
  selector: 'app-dashboard-infected',
  templateUrl: './dashboard-infected.component.html',
  styleUrls: ['./dashboard-infected.component.css']
})
export class DashboardInfectedComponent implements OnInit {

  constructor(private dashboardInfectedService: DashboardInfectedService) { }

  public growthRatesData: any = {};
  public newCasesData: any = {};
  public newCasesVariationData: any = {};
  public totalPositiveData: any = {};

  ngOnInit(): void {
    this.getInfected();
  }

  private getInfected() {

    let _subs = this.dashboardInfectedService.getGrowthRates().subscribe((data: any) => {
      this.growthRatesData = data;
      _subs.unsubscribe();
    });

    let _subsNewCases = this.dashboardInfectedService.getNewCases().subscribe((data: any) => {
      this.newCasesData = data;
      _subsNewCases.unsubscribe();
    });

    let _subsNewCasesVariation = this.dashboardInfectedService.getNewCasesVariation().subscribe((data: any) => {
      this.newCasesVariationData = data;
      _subsNewCasesVariation.unsubscribe();
    });

    let _subsTotalPositive = this.dashboardInfectedService.getTotalPositive().subscribe((data: any) => {
      this.totalPositiveData = data;
      _subsTotalPositive.unsubscribe();
    });
  }

}
