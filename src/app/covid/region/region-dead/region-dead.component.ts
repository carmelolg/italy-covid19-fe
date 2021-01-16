import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { RegionObservableService } from './../region-observable.service';
import { RegionDeadService } from './region-dead.service';

@Component({
  selector: 'app-region-dead',
  templateUrl: './region-dead.component.html',
  styleUrls: ['./region-dead.component.css']
})
export class RegionDeadComponent implements OnInit {

  constructor(private regionDeadService: RegionDeadService, private regionObservableService: RegionObservableService) { }

  public dead: any = {};
  regionName: string;

  ngOnInit(): void {
    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getDead();
    })
  }

  getDead() {
    this.regionDeadService.getDead(this.regionName).pipe(take(1)).subscribe((data: any) => {
      this.dead = data;
    });
  }

  reset() {
    this.dead = {};
  }
}
