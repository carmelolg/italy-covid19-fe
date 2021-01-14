import { DashboardHealedService } from './dashboard-healed.service';
import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';

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
    this.dashboardHealedService.getHealed().pipe(take(1)).subscribe((data: any) => {
      this.healed = data;
    });
  }
}
