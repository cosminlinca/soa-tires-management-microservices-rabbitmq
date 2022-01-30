import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'tire-management', 
        loadChildren: () => import('./tire-management/tires.module')
            .then(m => m.TiresModule)
    }
];
