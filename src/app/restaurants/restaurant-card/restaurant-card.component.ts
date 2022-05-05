import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  @HostBinding('attr.role') role = 'article';

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (!this.restaurant) {
      throw new Error('RestaurantCardComponent: restaurant is not defined');
    }
  }

  @HostListener('keydown.space')
  @HostListener('keydown.enter')
  onKeyboardClick() {
    this.elementRef.nativeElement.click();
  }
}
