import { DashboardHealedService } from './dashboard-healed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-healed',
  templateUrl: './dashboard-healed.component.html',
  styleUrls: ['./dashboard-healed.component.css']
})
export class DashboardHealedComponent implements OnInit {

  public healed: any = {};

  constructor(private dashboardHealedService: DashboardHealedService) { }

  ngOnInit(): void {
    this.getHealed();
  }

  getHealed() {
    let _subs = this.dashboardHealedService.getHealed().subscribe((data: any) => {
      this.healed = data;
      _subs.unsubscribe();
    });
  }
}
