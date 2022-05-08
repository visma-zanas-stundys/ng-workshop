import { Inject, Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { LIKE_STORAGE } from './like-storage.token';

@Injectable({ providedIn: 'root' })
export class LikeDislikeService {
  private likedRestaurantIds: Record<Restaurant['id'], boolean> = {};

  constructor(@Inject(LIKE_STORAGE) private storage: Storage) {
    const likedRestaurantIds = this.storage.getItem('likedRestaurantIds');

    if (likedRestaurantIds) {
      this.likedRestaurantIds = JSON.parse(likedRestaurantIds);
    }
  }

  isLiked(restaurant: Restaurant): boolean {
    return this.likedRestaurantIds[restaurant.id] === true;
  }

  isDisliked(restaurant: Restaurant): boolean {
    return this.likedRestaurantIds[restaurant.id] === false;
  }

  like(restaurant: Restaurant): void {
    this.likedRestaurantIds[restaurant.id] = true;
    this.storage.setItem(
      'likedRestaurantIds',
      JSON.stringify(this.likedRestaurantIds)
    );
  }

  dislike(restaurant: Restaurant): void {
    this.likedRestaurantIds[restaurant.id] = false;
    this.storage.setItem(
      'likedRestaurantIds',
      JSON.stringify(this.likedRestaurantIds)
    );
  }
}
