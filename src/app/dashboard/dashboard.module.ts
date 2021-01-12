import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { CdkColumnDef } from '@angular/cdk/table';
import { ChartModule } from '../charts/chart.module';
import { ResumeComponent } from './../resume/resume.component';
import { StatsComponent } from './../stats/stats.component';
import { InfectedComponent } from './../infected/infected.component';
import { HospitalizedComponent } from './../hospitalized/hospitalized.component';
import { DeadComponent } from '../dead/dead.component';
import { HealedComponent } from './../healed/healed.component';
import { TestsComponent } from './../tests/tests.component';
import { DashboardInfectedComponent } from './dashboard-infected/dashboard-infected.component';
import { DashboardHospitalizedComponent } from './dashboard-hospitalized/dashboard-hospitalized.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  providers: [DatePipe, CdkColumnDef],
  declarations: [DashboardComponent, ResumeComponent, StatsComponent, InfectedComponent, HospitalizedComponent, DeadComponent, HealedComponent, TestsComponent, DashboardInfectedComponent, DashboardHospitalizedComponent]
})
export class DashboardModule { }
