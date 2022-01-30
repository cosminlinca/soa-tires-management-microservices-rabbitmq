import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Tires Management',
                routePath: 'tire-management',
                ngModuleName: 'TiresModule'
            },
            {
                // For 
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Insert',
                routePath: 'tireCreation',
                ngModuleName: 'TireCreationModule'
            }
        ] as Microfrontend[]);
    }
}
