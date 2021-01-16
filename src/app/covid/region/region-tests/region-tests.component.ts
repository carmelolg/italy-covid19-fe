import { take } from 'rxjs/operators';
import { RegionTestsService } from './region-tests.service';
import { RegionObservableService } from './../region-observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-tests',
  templateUrl: './region-tests.component.html',
  styleUrls: ['./region-tests.component.css']
})
export class RegionTestsComponent implements OnInit {

  public tests: any = {};
  public newPositive: any = {};
  regionName: string;

  constructor(private regionTestService: RegionTestsService, private regionObservableService: RegionObservableService) { }

  ngOnInit(): void {
    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getTests();
    });
    this.regionObservableService.newPositive$.subscribe(_newPositive => {
      this.newPositive = _newPositive;
    });

  }


  private getTests() {

    this.regionTestService.getTests(this.regionName).pipe(take((1))).subscribe((data: any) => {
      this.tests = data;
    });
  }


  reset() {
    this.tests = {};
    this.newPositive = {};
  }
}
