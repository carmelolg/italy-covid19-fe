import {DashboardObservableService} from '../dashboard-observable.service';
import {Component, OnInit} from '@angular/core';
import {DashboardInfectedService} from './dashboard-infected.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-infected',
  templateUrl: './dashboard-infected.component.html',
  styleUrls: ['./dashboard-infected.component.scss']
})
export class DashboardInfectedComponent implements OnInit {

  constructor(private dashboardInfectedService: DashboardInfectedService, private dashboardObservableService: DashboardObservableService) { }

  public growthRatesData: any = {};
  public newCasesData: any = {};
  public newCasesVariationData: any = {};
  public totalPositiveData: any = {};

  ngOnInit(): void {
    this.getInfected();
  }

  private getInfected() {
    // NOTES
    // use pipe(take(1)) instead of unsubscribe manually
    // avoid underscore for private variables, use private instead

   this.dashboardInfectedService.getGrowthRates().pipe(take(1)).subscribe((data: any) => {
      this.growthRatesData = data;
    });

    this.dashboardInfectedService.getNewCases().pipe(take(1)).subscribe((data: any) => {
      this.newCasesData = data;
      this.dashboardObservableService.broadcastNewPositive(data);
    });

    this.dashboardInfectedService.getNewCasesVariation().pipe(take(1)).subscribe((data: any) => {
      this.newCasesVariationData = data;
    });

    this.dashboardInfectedService.getTotalPositive().pipe(take(1)).subscribe((data: any) => {
      this.totalPositiveData = data;
    });
  }

}
