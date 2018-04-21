import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { GeralService } from './providers/geral.service'
import { GlobalSettings } from './global.settings';
import { RatingComponent } from './components/rating/rating.component';
import { ModalComponent } from './components/modal/modal.component';
import { AutoGrowDirective } from './directives/auto-grow.directive'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatingComponent,
    ModalComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //routes
    HttpModule,
    FormsModule
  ],
  providers: [
    GeralService,
    GlobalSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
