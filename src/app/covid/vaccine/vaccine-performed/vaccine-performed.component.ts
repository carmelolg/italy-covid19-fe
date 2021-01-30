import {Component, Input, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {VaccineService} from '../vaccine.service';

@Component({
  selector: 'app-vaccine-performed',
  templateUrl: './vaccine-performed.component.html',
  styleUrls: ['./vaccine-performed.component.css']
})
export class VaccinePerformedComponent implements OnInit {

  constructor(
    private vaccineService: VaccineService
  ) {}

  @Input() ranking: any = {};

  bestFive = [];
  worstFive = [];
  fullRanking = [];
  ageGroups = [];

  ngOnInit(): void {
    this.bestFive = this.ranking.bestRanked;
    this.worstFive = this.ranking.worstRanked;
    this.fullRanking = this.ranking.fullRanking;

    this.vaccineService.getVaccineData().pipe(take(1)).subscribe(data => {
      this.ageGroups = data.ageGroups;
    });
  }
}
