import { take } from 'rxjs/operators';
import { RegionObservableService } from './../region-observable.service';
import { RegionHospitalizedService } from './region-hospitalized.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-hospitalized',
  templateUrl: './region-hospitalized.component.html',
  styleUrls: ['./region-hospitalized.component.css']
})
export class RegionHospitalizedComponent implements OnInit {

  constructor(private regionHospitalizedService: RegionHospitalizedService, private regionObservableService: RegionObservableService) { }

  public hospitalized: any = {};
  public intensiveCare: any = {};
  regionName: string;

  ngOnInit(): void {
    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getHospitalized();
      this.getIntensiveCare();
    })
  }

  getHospitalized() {
    this.regionHospitalizedService.getHospitalized(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.hospitalized = data;
    });
  }

  getIntensiveCare() {
    this.regionHospitalizedService.getIntensiveCare(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.intensiveCare = data;
    });
  }

  reset() {
    this.hospitalized = {};
    this.intensiveCare = {};
  }

}
