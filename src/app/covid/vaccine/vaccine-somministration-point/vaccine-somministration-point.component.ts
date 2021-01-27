import { Component, OnInit } from '@angular/core';
import { VaccineSomministrationPointService } from './vaccine-somministration-point.service';

@Component({
  selector: 'app-vaccine-somministration-point',
  templateUrl: './vaccine-somministration-point.component.html',
  styleUrls: ['./vaccine-somministration-point.component.css']
})
export class VaccineSomministrationPointComponent implements OnInit {

  constructor(private vaccineSomministrationPointService: VaccineSomministrationPointService) { }

  points: any = [];
  displayedColumns: string[] = ['regione', 'provincia', 'comune', 'luogo'];

  ngOnInit(): void {
    this.vaccineSomministrationPointService.getSomministrationPoints().subscribe(points => this.points = points);
  }

}
