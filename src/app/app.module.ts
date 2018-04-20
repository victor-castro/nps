import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { GeralService } from './providers/geral.service'
import { GlobalSettings } from './global.settings'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //routes
    HttpModule
  ],
  providers: [
    GeralService,
    GlobalSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
