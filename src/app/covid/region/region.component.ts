import { ChartService } from './../../charts/chart.service';
import { RegionObservableService } from './region-observable.service';
import { RegionService } from './region.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit, AfterViewInit {

  isLoading = false;

  formControl = new FormControl({ value: '', disabled: this.isLoading });
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  regionNameInput = "";

  migrationDate;
  resumeData: any = {};

  constructor(private regionService: RegionService, private regionObservableService: RegionObservableService, private chartService: ChartService) { }

  ngOnInit(): void {

    this.regionNameInput = "Lombardia";

    this.regionService.getRegionList().subscribe(regions => {
      this.options = regions;
    })

    this.filteredOptions = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  ngAfterViewInit() {
    this.call();
  }


  call() {
    this.generateResumeData();
    this.regionObservableService.broadcastRegionName(this.regionNameInput);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  generateResumeData() {
    this.resumeData = {};
    this.regionService.getRegionResume(this.regionNameInput).subscribe(data => {
      this.resumeData = data;
    });

  }

  public changeTabHandler(event: any): void {
    this.chartService.updateChartModel();
  }

}
