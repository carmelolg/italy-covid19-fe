import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RegionObservableService } from './../region-observable.service';
import { RegionHealedService } from './region-healed.service';

@Component({
  selector: 'app-region-healed',
  templateUrl: './region-healed.component.html',
  styleUrls: ['./region-healed.component.css']
})
export class RegionHealedComponent implements OnInit {

  constructor(private regionHealedService: RegionHealedService, private regionObservableService: RegionObservableService) { }

  public healed: any = {};
  regionName: string;

  ngOnInit(): void {
    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getHealed();
    })
  }

  getHealed() {
    this.regionHealedService.getHealed(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.healed = data;
    });
  }

  reset() {
    this.healed = {};
  }

}
