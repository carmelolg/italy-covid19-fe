import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DistrictObservableService } from './../district-observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district-vaccine',
  templateUrl: './district-vaccine.component.html',
  styleUrls: ['./district-vaccine.component.css']
})
export class DistrictVaccineComponent implements OnInit {

  constructor(private http: HttpClient, private districtObservableService: DistrictObservableService) { }

  private baseUrl: string = environment.baseUrl;

  points: any = [];
  displayedColumns: string[] = ['comune', 'luogo'];

  ngOnInit(): void {
    this.districtObservableService.districtName$.subscribe(name => {
      this.getDistrictSomministrationPoint(name).subscribe(points => {
        this.points = points;
      });
    });
  }


  public getDistrictSomministrationPoint(name) {
    const url = this.baseUrl + 'vaccine/district/' + name + '/somministration_point';
    return this.http.get<any>(url);
  }

}
