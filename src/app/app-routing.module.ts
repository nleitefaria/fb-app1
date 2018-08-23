import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourcesDetailsComponent } from './components/sources/sources-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesDetailsComponent } from './components/countries/countries-details.component';
import { IncomeLevelsComponent } from './components/income-levels/income-levels.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { IndicatorsDetailsComponent } from './components/indicators/indicators-details.component';
import { LendingTypesComponent } from './components/lending-types/lending-types.component';
import { LendingTypesCountriesComponent } from './components/lending-types/lending-types-countries.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicsIndicatorsComponent } from './components/topics/topics-indicators.component';
import { IncomeLevelsCountriesComponent } from './components/income-levels/income-levels-countries.component';
import { AggregatesComponent } from './components/aggregates/aggregates.component';

const routes: Routes = [
	{ 
		path: '', 
		component: HomeComponent
	},
	{
		path: 'sources',
		component: SourcesComponent
	},
	{
		path: 'sources-details/:id',
		component: SourcesDetailsComponent
	},
	{
		path: 'countries',
		component: CountriesComponent
	},
	{
		path: 'countries-details/:id',
		component: CountriesDetailsComponent
	},
	{
		path: 'income-levels',
		component: IncomeLevelsComponent
	},
	{
		path: 'income-levels-countries/:id',
		component: IncomeLevelsCountriesComponent
	},
	{
		path: 'indicators',
		component: IndicatorsComponent
	},
	{
		path: 'indicators-details/:id',
		component: IndicatorsDetailsComponent
	},
	{
		path: 'lending-types',
		component: LendingTypesComponent
	},
	{
		path: 'lending-types-countries/:id',
		component: LendingTypesCountriesComponent
	},
	{
		path: 'topics',
		component: TopicsComponent
	},
	{
		path: 'topics-indicators/:id',
		component: TopicsIndicatorsComponent
	},
	{
		path: 'aggregates',
		component: AggregatesComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
