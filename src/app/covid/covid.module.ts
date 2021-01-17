import { CdkColumnDef } from '@angular/cdk/table';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { ChartModule } from '../charts/chart.module';
import { DeadComponent } from '../dead/dead.component';
import { DemoMaterialModule } from '../demo-material-module';
import { HealedComponent } from '../healed/healed.component';
import { HospitalizedComponent } from '../hospitalized/hospitalized.component';
import { InfectedComponent } from '../infected/infected.component';
import { ResumeComponent } from '../resume/resume.component';
import { StatsComponent } from '../stats/stats.component';
import { TestsComponent } from '../tests/tests.component';
import { CovidComponent } from './covid.component';
import { CovidRoutes } from './covid.routing';
import { DashboardDeadComponent } from './dashboard/dashboard-dead/dashboard-dead.component';
import { DashboardHealedComponent } from './dashboard/dashboard-healed/dashboard-healed.component';
import { DashboardHospitalizedComponent } from './dashboard/dashboard-hospitalized/dashboard-hospitalized.component';
import { DashboardInfectedComponent } from './dashboard/dashboard-infected/dashboard-infected.component';
import { DashboardTestsComponent } from './dashboard/dashboard-tests/dashboard-tests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictComponent } from './district/district.component';
import { InfoComponent } from './info/info.component';
import { RegionDeadComponent } from './region/region-dead/region-dead.component';
import { RegionHealedComponent } from './region/region-healed/region-healed.component';
import { RegionHospitalizedComponent } from './region/region-hospitalized/region-hospitalized.component';
import { RegionInfectedComponent } from './region/region-infected/region-infected.component';
import { RegionTestsComponent } from './region/region-tests/region-tests.component';
import { RegionComponent } from './region/region.component';
import { RegionStatsComponent } from './region/regione-stats/regione-stats.component';
import { DistrictInfectedComponent } from './district/district-infected/district-infected.component';
import { DistrictStatsComponent } from './district/district-stats/district-stats.component';


@NgModule({
  declarations: [
    CovidComponent,
    DashboardComponent,
    ResumeComponent,
    StatsComponent,
    InfectedComponent,
    HospitalizedComponent,
    DeadComponent,
    HealedComponent,
    TestsComponent,
    DashboardInfectedComponent,
    DashboardHospitalizedComponent,
    DashboardHealedComponent,
    DashboardDeadComponent,
    DashboardTestsComponent,
    RegionComponent,
    RegionDeadComponent,
    RegionHealedComponent,
    RegionHospitalizedComponent,
    RegionInfectedComponent,
    RegionTestsComponent,
    DistrictComponent,
    InfoComponent,
    RegionStatsComponent,
    DistrictInfectedComponent,
    DistrictStatsComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CovidRoutes)
  ],
  providers: [DatePipe, CdkColumnDef],
})
export class CovidModule {
}
