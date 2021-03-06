import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MatFormFieldModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
