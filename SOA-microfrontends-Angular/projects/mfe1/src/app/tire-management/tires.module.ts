import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiresListComponent } from './tires-list/tires-list.component';
import { RouterModule } from '@angular/router';
import { TIRES_ROUTES } from './tires.routes';
import { TiresComponent } from './tires-list/tires/tires.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TIRES_ROUTES)
  ],
  declarations: [
    TiresListComponent, 
    TiresComponent
  ]
})
export class TiresModule { }
