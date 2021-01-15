import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegionComponent} from './region/region.component';
import {InfoComponent} from './info/info.component';
import {DistrictComponent} from './district/district.component';


export const CovidRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'district',
    component: DistrictComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];
