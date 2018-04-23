import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourcesComponent } from './components/sources/sources.component';

const routes: Routes = [
	{
		path: 'sources',
		component: SourcesComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
