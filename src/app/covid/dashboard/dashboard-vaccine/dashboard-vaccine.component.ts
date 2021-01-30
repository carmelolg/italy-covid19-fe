import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DashboardVaccineService } from './dashboard-vaccine.service';

@Component({
  selector: 'app-dashboard-vaccine',
  templateUrl: './dashboard-vaccine.component.html',
  styleUrls: ['./dashboard-vaccine.component.css']
})
export class DashboardVaccineComponent implements OnInit {

  constructor(private dashboardVaccineService: DashboardVaccineService, private router: Router) { }

  ageGroups = [];

  ngOnInit(): void {
    this.dashboardVaccineService.getVaccineData().pipe(take(1)).subscribe(data => {
      this.ageGroups = data.ageGroups;
    });
  }

  redirectToVaccini() {
    this.router.navigate(['/vaccine']);
  }

}
