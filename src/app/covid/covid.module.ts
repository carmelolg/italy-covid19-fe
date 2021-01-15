import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CovidComponent} from './covid.component';
import {RouterModule} from '@angular/router';
import {ResumeComponent} from '../resume/resume.component';
import {StatsComponent} from '../stats/stats.component';
import {InfectedComponent} from '../infected/infected.component';
import {HospitalizedComponent} from '../hospitalized/hospitalized.component';
import {DeadComponent} from '../dead/dead.component';
import {HealedComponent} from '../healed/healed.component';
import {TestsComponent} from '../tests/tests.component';
import {CovidRoutes} from './covid.routing';
import {RegionComponent} from './region/region.component';
import {CdkColumnDef} from '@angular/cdk/table';
import {ChartModule} from '../charts/chart.module';
import {DemoMaterialModule} from '../demo-material-module';
import {ChartistModule} from 'ng-chartist';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardInfectedComponent} from './dashboard/dashboard-infected/dashboard-infected.component';
import {DashboardHospitalizedComponent} from './dashboard/dashboard-hospitalized/dashboard-hospitalized.component';
import {DashboardTestsComponent} from './dashboard/dashboard-tests/dashboard-tests.component';
import {DashboardDeadComponent} from './dashboard/dashboard-dead/dashboard-dead.component';
import {DashboardHealedComponent} from './dashboard/dashboard-healed/dashboard-healed.component';
import {DistrictComponent} from './district/district.component';
import {InfoComponent} from './info/info.component';
import {RegionDeadComponent} from './region/region-dead/region-dead.component';
import {RegionHealedComponent} from './region/region-healed/region-healed.component';
import {RegionHospitalizedComponent} from './region/region-hospitalized/region-hospitalized.component';
import {RegionInfectedComponent} from './region/region-infected/region-infected.component';
import {RegionTestsComponent} from './region/region-tests/region-tests.component';


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
    InfoComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartModule,
    RouterModule.forChild(CovidRoutes)
  ],
  providers: [DatePipe, CdkColumnDef],
})
export class CovidModule {
}
