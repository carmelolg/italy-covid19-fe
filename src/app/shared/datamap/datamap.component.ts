import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";

@Component({
  selector: 'datamap',
  templateUrl: './datamap.component.html',
  styleUrls: ['./datamap.component.css']
})
export class DatamapComponent implements OnInit {

  constructor() { }

  map = null;

  ngOnInit(): void {
    this.map = am4core.create("mapContainer", am4maps.MapChart);
    this.map.projection = new am4maps.projections.Mercator();
    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.include = ['IT'];
    //polygonSeries.useGeodata = true;
    this.map.series.push(polygonSeries);
  }
}