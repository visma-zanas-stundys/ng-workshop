import { Component } from '@angular/core';
import { RestaurantApiService } from './restaurants/restaurant-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  restaurants$ = this.restaurantApiService.getAll();

  constructor(private restaurantApiService: RestaurantApiService) {}
}
