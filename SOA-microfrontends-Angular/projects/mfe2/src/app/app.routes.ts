import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'tireCreation', 
        loadChildren: () => import('./tireCreation/tireCreate.module')
            .then(m => m.TireCreationModule)
    }
];
