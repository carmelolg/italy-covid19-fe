import { DashboardTestsService } from './dashboard-tests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tests',
  templateUrl: './dashboard-tests.component.html',
  styleUrls: ['./dashboard-tests.component.css']
})
export class DashboardTestsComponent implements OnInit {

  public tests: any = {};
  constructor(private dashboardTestService: DashboardTestsService) { }

  ngOnInit(): void {
    this.getTests();
  }

  private getTests() {

    let _subs = this.dashboardTestService.getTests().subscribe((data: any) => {
      this.tests = data;
      _subs.unsubscribe();
    });
  }
}
