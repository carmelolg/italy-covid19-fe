import { RegionRoutes } from './region.routing';
import { RouterModule } from '@angular/router';
import { ChartModule } from './../charts/chart.module';
import { ChartistModule } from 'ng-chartist';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { RegionComponent } from './region.component';
import { RegionDeadComponent } from './region-dead/region-dead.component';
import { RegionHealedComponent } from './region-healed/region-healed.component';
import { RegionHospitalizedComponent } from './region-hospitalized/region-hospitalized.component';
import { RegionInfectedComponent } from './region-infected/region-infected.component';
import { RegionTestsComponent } from './region-tests/region-tests.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RegionComponent,
    RegionDeadComponent,
    RegionHealedComponent,
    RegionHospitalizedComponent,
    RegionInfectedComponent,
    RegionTestsComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartModule,
    RouterModule.forChild(RegionRoutes)
  ]
})
export class RegionModule { }
