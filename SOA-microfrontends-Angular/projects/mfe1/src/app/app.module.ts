import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { MatButtonModule } from '@angular/material/button'
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(APP_ROUTES),
    MainModule, 
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
