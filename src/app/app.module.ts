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
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { LendingTypesComponent } from './components/lending-types/lending-types.component';
import { TopicsComponent } from './components/topics/topics.component';
import { HomeComponent } from './components/home/home.component';
import { IncomeLevelsCountriesComponent } from './components/income-levels/income-levels-countries.component';
import { TopicsIndicatorsComponent } from './components/topics/topics-indicators.component';
import { LendingTypesCountriesComponent } from './components/lending-types/lending-types-countries.component';
import { IndicatorsDetailsComponent } from './components/indicators/indicators-details.component';
import { AggregatesComponent } from './components/aggregates/aggregates.component';


@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    SourcesDetailsComponent,
    CountriesComponent,
    CountriesDetailsComponent,
    IncomeLevelsComponent,
    IndicatorsComponent,
    LendingTypesComponent,
    TopicsComponent,
    HomeComponent,
    IncomeLevelsCountriesComponent,
    TopicsIndicatorsComponent,
    LendingTypesCountriesComponent,
    IndicatorsDetailsComponent,
    AggregatesComponent
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
