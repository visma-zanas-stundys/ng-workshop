import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { LikeDislikeService } from './like-dislike.service';

@Pipe({
  name: 'filterLiked',
  pure: false,
})
export class FilterLikedPipe implements PipeTransform {
  constructor(private likeDislikeService: LikeDislikeService) {}

  transform(restaurants: Restaurant[]): Restaurant[] {
    return restaurants.filter((r) => this.likeDislikeService.isLiked(r));
  }
}
