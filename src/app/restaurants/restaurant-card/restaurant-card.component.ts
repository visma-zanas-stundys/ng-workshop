import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent {
  @Input() imageUrl?: string;
  @Input() name?: string;
  @Input() address?: string;
  @Input() distanceInKm?: number;
  @Input() rating?: number;

  @HostBinding('attr.role') role = 'article';
}
