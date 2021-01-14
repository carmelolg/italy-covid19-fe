import { DashboardObservableService } from '../dashboard-observable.service';
import { DashboardTestsService } from './dashboard-tests.service';
import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-tests',
  templateUrl: './dashboard-tests.component.html',
  styleUrls: ['./dashboard-tests.component.css']
})
export class DashboardTestsComponent implements OnInit {

  public tests: any = {};
  public newPositive: any = {};
  constructor(private dashboardTestService: DashboardTestsService, private dashboardObservableService: DashboardObservableService) { }

  ngOnInit(): void {
    this.getTests();

    this.dashboardObservableService.newPositive$.subscribe(_newPositive => {
      this.newPositive = _newPositive;
    });

  }

  private getTests() {

    this.dashboardTestService.getTests().pipe(take((1))).subscribe((data: any) => {
      this.tests = data;
    });
  }
}
