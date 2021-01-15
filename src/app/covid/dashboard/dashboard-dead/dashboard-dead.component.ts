import {DashboardDeadService} from './dashboard-dead.service';
import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-dead',
  templateUrl: './dashboard-dead.component.html',
  styleUrls: ['./dashboard-dead.component.scss']
})
export class DashboardDeadComponent implements OnInit {

  constructor(private dashboardDeadService: DashboardDeadService) { }

  public dead: any = {};

  ngOnInit(): void {
    this.getDead();
  }

  getDead() {
    this.dashboardDeadService.getDead().pipe(take(1)).subscribe((data: any) => {
      this.dead = data;
    });
  }

}
