import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('./covid/covid.module').then(m => m.CovidModule)
    }
  ]
;
