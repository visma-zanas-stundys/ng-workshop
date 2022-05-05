import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantsModule } from './restaurants/restaurants.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RestaurantsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
