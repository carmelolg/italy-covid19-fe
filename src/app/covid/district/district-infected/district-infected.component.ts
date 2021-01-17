import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DistrictObservableService } from './../district-observable.service';
import { DistrictInfectedService } from './district-infected.service';

@Component({
  selector: 'app-district-infected',
  templateUrl: './district-infected.component.html',
  styleUrls: ['./district-infected.component.css']
})
export class DistrictInfectedComponent implements OnInit {

  constructor(private districtInfectedService: DistrictInfectedService, private districtObservableService: DistrictObservableService) { }

  public totalPositiveData: any = {};
  public newCasesData: any = {};

  districtName: string;

  ngOnInit(): void {

    this.districtObservableService.districtName$.subscribe(name => {
      this.districtName = name;
      this.reset();
      this.getInfected();
    });
  }

  getInfected() {
    this.districtInfectedService.getTotalPositive(this.districtName).pipe(take(1)).subscribe((data: any) => {

      this.newCasesData.results = [];
      for (let index = 0; index < data.results.length; index++) {
        const item = data.results[index];
        this.newCasesData.results.push({ data: item.data, value: item.increaseFromYesterday });
      }

      this.totalPositiveData = data;

    });
  }

  reset() {
    this.totalPositiveData = {};
    this.newCasesData = {};
  }
}
