import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeDislikeComponent } from './like-dislike.component';
import { FilterLikedPipe } from './filter-liked.pipe';

@NgModule({
  declarations: [LikeDislikeComponent, FilterLikedPipe],
  exports: [LikeDislikeComponent, FilterLikedPipe],
  imports: [CommonModule],
})
export class LikeDislikeModule {}
