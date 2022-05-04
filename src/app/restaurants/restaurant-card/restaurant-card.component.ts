import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  @HostBinding('attr.role') role = 'article';

  ngOnInit() {
    if (!this.restaurant) {
      throw new Error('RestaurantCardComponent: restaurant is not defined');
    }
  }
}
