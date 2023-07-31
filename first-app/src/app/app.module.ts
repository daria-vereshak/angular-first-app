import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'

import { HttpClientModule } from '@angular/common/http';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule.forRoot([]), 
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent, HousingLocationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
