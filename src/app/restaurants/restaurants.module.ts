import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



@NgModule({
  declarations: [
    RestaurantCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestaurantCardComponent
  ]
})
export class RestaurantsModule { }
