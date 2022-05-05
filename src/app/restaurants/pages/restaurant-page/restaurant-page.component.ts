import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant$: Observable<Restaurant> = this.route.data.pipe(
    map((data) => data['restaurant'])
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
