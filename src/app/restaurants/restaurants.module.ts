import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';



@NgModule({
  declarations: [
    RestaurantCardComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestaurantCardComponent,
    RestaurantListComponent
  ]
})
export class RestaurantsModule { }
