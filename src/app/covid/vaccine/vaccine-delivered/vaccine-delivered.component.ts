import { Component, OnInit } from '@angular/core';
import { VaccineDeliveredService } from './vaccine-delivered.service';

@Component({
  selector: 'app-vaccine-delivered',
  templateUrl: './vaccine-delivered.component.html',
  styleUrls: ['./vaccine-delivered.component.css']
})
export class VaccineDeliveredComponent implements OnInit {

  constructor(private vaccineDeliveredService: VaccineDeliveredService) { }

  bestFive = [];
  worstFive = [];
  fullRanking = [];

  ngOnInit(): void {
    this.vaccineDeliveredService.getRankingByDelivered().subscribe(ranking => {
      this.bestFive = ranking.bestRanked;
      this.worstFive = ranking.worstRanked;
      this.fullRanking = ranking.fullRanking;
    });
  }

}
