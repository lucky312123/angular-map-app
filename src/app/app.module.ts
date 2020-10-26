import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapPointComponent } from './map-point/map-point.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent,
    MapPointComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LeafletModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
