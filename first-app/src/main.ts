/// <reference types="@angular/localize" />

/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import './elf-state'
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
