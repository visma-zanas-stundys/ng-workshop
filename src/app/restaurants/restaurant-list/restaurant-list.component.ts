import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantListComponent {
  @Input() restaurants: Restaurant[] = [];
}
