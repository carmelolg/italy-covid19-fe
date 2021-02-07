import { CdkColumnDef } from '@angular/cdk/table';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { ChartModule } from '../charts/chart.module';
import { DemoMaterialModule } from '../demo-material-module';
import { AgeGroupVaccineComponent } from '../shared/age-group-vaccine/age-group-vaccine.component';
import { DeadComponent } from '../shared/dead/dead.component';
import { HealedComponent } from '../shared/healed/healed.component';
import { HospitalizedComponent } from '../shared/hospitalized/hospitalized.component';
import { InfectedComponent } from '../shared/infected/infected.component';
import { ResumeComponent } from '../shared/resume/resume.component';
import { StatsComponent } from '../shared/stats/stats.component';
import { TestsComponent } from '../shared/tests/tests.component';
import { RankingComponent } from '../shared/ranking/ranking.component';
import { CovidComponent } from './covid.component';
import { CovidRoutes } from './covid.routing';
import { DashboardDeadComponent } from './dashboard/dashboard-dead/dashboard-dead.component';
import { DashboardHealedComponent } from './dashboard/dashboard-healed/dashboard-healed.component';
import { DashboardHospitalizedComponent } from './dashboard/dashboard-hospitalized/dashboard-hospitalized.component';
import { DashboardInfectedComponent } from './dashboard/dashboard-infected/dashboard-infected.component';
import { DashboardTestsComponent } from './dashboard/dashboard-tests/dashboard-tests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictInfectedComponent } from './district/district-infected/district-infected.component';
import { DistrictStatsComponent } from './district/district-stats/district-stats.component';
import { DistrictVaccineComponent } from './district/district-vaccine/district-vaccine.component';
import { DistrictComponent } from './district/district.component';
import { InfoComponent } from './info/info.component';
import { RegionDeadComponent } from './region/region-dead/region-dead.component';
import { RegionHealedComponent } from './region/region-healed/region-healed.component';
import { RegionHospitalizedComponent } from './region/region-hospitalized/region-hospitalized.component';
import { RegionInfectedComponent } from './region/region-infected/region-infected.component';
import { RegionTestsComponent } from './region/region-tests/region-tests.component';
import { RegionVaccineComponent } from './region/region-vaccine/region-vaccine.component';
import { RegionComponent } from './region/region.component';
import { RegionStatsComponent } from './region/regione-stats/regione-stats.component';
import { VaccineDeliveredComponent } from './vaccine/vaccine-delivered/vaccine-delivered.component';
import { VaccinePercentageComponent } from './vaccine/vaccine-percentage/vaccine-percentage.component';
import { VaccinePerformedComponent } from './vaccine/vaccine-performed/vaccine-performed.component';
import { VaccineSomministrationPointComponent } from './vaccine/vaccine-somministration-point/vaccine-somministration-point.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { DatamapComponent } from '../shared/datamap/datamap.component';


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
    DistrictStatsComponent,
    DistrictVaccineComponent,
    RegionVaccineComponent,
    VaccineComponent,
    VaccinePercentageComponent,
    RankingComponent,
    VaccineDeliveredComponent,
    VaccinePerformedComponent,
    VaccineSomministrationPointComponent,
    AgeGroupVaccineComponent,
    DatamapComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
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
