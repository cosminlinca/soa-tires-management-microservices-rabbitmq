import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TireCreatePostComponent } from './tire-create/tire-create.component';
import { RouterModule } from '@angular/router';
import { TIRES_ROUTES } from './tireCreate.routes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TIRES_ROUTES),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    TextFieldModule,
    MatSelectModule,
    MatCardModule,
  ],
  declarations: [
    TireCreatePostComponent
  ]
})
export class TireCreationModule { }
