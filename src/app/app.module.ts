import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourcesDetailsComponent } from './components/sources/sources-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesDetailsComponent } from './components/countries/countries-details.component';
import { IncomeLevelsComponent } from './components/income-levels/income-levels.component';

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    SourcesDetailsComponent,
    CountriesComponent,
    CountriesDetailsComponent,
    IncomeLevelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
