import {DashboardHospitalizedService} from './dashboard-hospitalized.service';
import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-hospitalized',
  templateUrl: './dashboard-hospitalized.component.html',
  styleUrls: ['./dashboard-hospitalized.component.scss']
})
export class DashboardHospitalizedComponent implements OnInit {


  public intensiveCareData: any = {};
  public hospitalizedData: any = {};

  constructor(private dashboardHospitalizedService: DashboardHospitalizedService) { }

  ngOnInit(): void {
    this.getData();
  }


  private getData() {

    this.dashboardHospitalizedService.getIntensiveCare().pipe(take(1)).subscribe((data: any) => {
      this.intensiveCareData = data;
    });

    this.dashboardHospitalizedService.getHospitalized().pipe(take(1)).subscribe((data: any) => {
      this.hospitalizedData = data;
    });

  }

}
