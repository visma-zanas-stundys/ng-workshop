import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { LikeDislikeService } from './like-dislike.service';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeDislikeComponent implements OnInit {
  @Input() restaurant!: Restaurant;

  constructor(public likeDislikeService: LikeDislikeService) {}

  ngOnInit(): void {
    if (!this.restaurant) {
      throw new Error('LikeDislikeComponent: restaurant is not defined');
    }
  }

  onLikeClick() {
    this.likeDislikeService.like(this.restaurant);
  }

  onDislikeClick() {
    this.likeDislikeService.dislike(this.restaurant);
  }
}
