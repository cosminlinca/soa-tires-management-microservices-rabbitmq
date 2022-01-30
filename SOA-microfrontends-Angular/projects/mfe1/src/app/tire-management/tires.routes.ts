import { Routes } from '@angular/router';
import { TiresListComponent } from './tires-list/tires-list.component';
import { TiresComponent } from './tires-list/tires/tires.component';

export const TIRES_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'tires-list', 
      children: [
        {path:'', component: TiresComponent}
      ]
    },
    {
      path: 'tires-list',
      component: TiresListComponent
    }
];
