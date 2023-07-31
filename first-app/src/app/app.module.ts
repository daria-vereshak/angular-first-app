import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'

import { HttpClientModule } from '@angular/common/http';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forRoot([]), 
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, HomeComponent, HousingLocationComponent, DetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
