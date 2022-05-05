import { Component, OnInit } from '@angular/core';
import { RestaurantApiService } from '../../restaurant-api.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css'],
})
export class RestaurantsPageComponent {
  restaurants$ = this.restaurantApiService.getAll();

  constructor(private restaurantApiService: RestaurantApiService) {}
}
