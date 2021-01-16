import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { RegionObservableService } from './../region-observable.service';
import { RegionInfectedService } from './region-infected.service';

@Component({
  selector: 'app-region-infected',
  templateUrl: './region-infected.component.html',
  styleUrls: ['./region-infected.component.css']
})
export class RegionInfectedComponent implements OnInit {

  constructor(private regionInfectedService: RegionInfectedService, private regionObservableService: RegionObservableService, private changeDetector: ChangeDetectorRef) { }

  public growthRatesData: any = {};
  public newCasesData: any = {};
  public newCasesVariationData: any = {};
  public totalPositiveData: any = {};

  regionName: string;

  ngOnInit(): void {

    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getInfected();
    });
  }


  private getInfected() {

   this.regionInfectedService.getGrowthRates(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.growthRatesData = data;
    });

    this.regionInfectedService.getNewCases(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.newCasesData = data;
      this.regionObservableService.broadcastNewPositive(data);
    });

    this.regionInfectedService.getNewCasesVariation(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.newCasesVariationData = data;
    });

    this.regionInfectedService.getTotalPositive(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.totalPositiveData = data;
    });

    this.changeDetector.detectChanges();
  }

  reset() {
    this.growthRatesData = {};
    this.newCasesData = {};
    this.newCasesVariationData = {};
    this.totalPositiveData = {};

  }

}
