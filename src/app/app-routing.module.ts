import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourcesComponent } from './components/sources/sources.component';
import { SourcesDetailsComponent } from './components/sources/sources-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesDetailsComponent } from './components/countries/countries-details.component';
import { IncomeLevelsComponent } from './components/income-levels/income-levels.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';

const routes: Routes = [
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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
