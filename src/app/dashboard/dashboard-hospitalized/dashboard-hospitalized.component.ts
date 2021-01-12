import { DashboardHospitalizedService } from './dashboard-hospitalized.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-hospitalized',
  templateUrl: './dashboard-hospitalized.component.html',
  styleUrls: ['./dashboard-hospitalized.component.css']
})
export class DashboardHospitalizedComponent implements OnInit {


  public intensiveCareData: any = {};
  public hospitalizedData: any = {};

  constructor(private dashboardHospitalizedService: DashboardHospitalizedService) { }

  ngOnInit(): void {
    this.getData();
  }


  private getData() {

    let _subs = this.dashboardHospitalizedService.getIntensiveCare().subscribe((data: any) => {
      this.intensiveCareData = data;
      _subs.unsubscribe();
    });

    let _subsHospitalized = this.dashboardHospitalizedService.getHospitalized().subscribe((data: any) => {
      this.hospitalizedData = data;
      _subsHospitalized.unsubscribe();
    });

  }

}
