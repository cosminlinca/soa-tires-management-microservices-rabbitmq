import { Routes } from '@angular/router';
import { TireCreatePostComponent } from './tire-create/tire-create.component';

export const TIRES_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'tire-create'
    },
    {
      path: 'tire-create',
      component: TireCreatePostComponent
    }
];
