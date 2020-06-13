import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandFormComponent } from './bands/band-form/band-form.component';
import { BandsComponent } from './bands/bands.component';

const routes: Routes = [ { path: '', component: BandsComponent }, { path: 'new', component: BandFormComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
