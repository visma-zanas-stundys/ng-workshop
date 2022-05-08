import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { LikeDislikeService } from 'src/app/like-dislike/like-dislike.service';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  @HostBinding('attr.role') role = 'article';
  @HostBinding('class.liked') get isLiked() {
    return this.likeDislikeService.isLiked(this.restaurant);
  }
  @HostBinding('class.disliked') get isDisliked() {
    return this.likeDislikeService.isDisliked(this.restaurant);
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private likeDislikeService: LikeDislikeService
  ) {}

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
