import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourcesDetailsComponent } from './components/sources/sources-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesDetailsComponent } from './components/countries/countries-details.component';
import { IncomeLevelsComponent } from './components/income-levels/income-levels.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { LendingTypesComponent } from './components/lending-types/lending-types.component';
import { TopicsComponent } from './components/topics/topics.component';

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
		path: 'indicators',
		component: IndicatorsComponent
	},
	{
		path: 'lending-types',
		component: LendingTypesComponent
	},
	{
		path: 'topics',
		component: TopicsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
