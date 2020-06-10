import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { BandsListComponent } from './bands/bands-list/bands-list.component';
import { BandItemComponent } from './bands/band-item/band-item.component';
import { BandDetailComponent } from './bands/band-detail/band-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandsListComponent,
    BandItemComponent,
    BandDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
