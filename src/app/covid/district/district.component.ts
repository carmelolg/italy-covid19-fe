import { ChartService } from './../../charts/chart.service';
import { DistrictService } from './district.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DistrictObservableService } from './district-observable.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit, AfterViewInit {

  formControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  isLoading = false;

  districtNameInput = "Torino";
  migrationDate;

  constructor(private districtService: DistrictService, private districtObservableService: DistrictObservableService, private chartService: ChartService) { }

  ngOnInit(): void {

    this.districtNameInput = "Torino";

    this.districtService.getDistrictList().subscribe(districts => {
      this.options = districts;
    })

    this.districtService.getMigrationDate().subscribe(data => {
      if (data != null && data.date != null) {
        this.migrationDate = data.date;
      }
    });

    this.filteredOptions = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngAfterViewInit() {
    this.call();
  }

  call() {
    this.districtObservableService.broadcastDistrictName(this.districtNameInput);
  }

  public changeTabHandler(event: any): void {
    this.chartService.updateChartModel();
  }

}
