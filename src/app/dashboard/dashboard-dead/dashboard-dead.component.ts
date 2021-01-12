import { DashboardDeadService } from './dashboard-dead.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-dead',
  templateUrl: './dashboard-dead.component.html',
  styleUrls: ['./dashboard-dead.component.css']
})
export class DashboardDeadComponent implements OnInit {

  constructor(private dashboardDeadService: DashboardDeadService) { }

  public dead: any = {};

  ngOnInit(): void {
    this.getDead();
  }

  getDead() {
    let _subs = this.dashboardDeadService.getDead().subscribe((data: any) => {
      this.dead = data;
      _subs.unsubscribe();
    });
  }

}
