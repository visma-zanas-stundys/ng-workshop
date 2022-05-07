import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { RestaurantApiService } from '../../restaurant-api.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css'],
})
export class RestaurantsPageComponent {
  restaurants$ = this.route.data.pipe(map((data) => data['restaurants']));

  constructor(private route: ActivatedRoute) {}
}
