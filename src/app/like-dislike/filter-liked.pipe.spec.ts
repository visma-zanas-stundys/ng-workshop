import { FilterLikedPipe } from './filter-liked.pipe';
import { LikeDislikeService } from './like-dislike.service';

describe('FilterLikedPipe', () => {
  it('create an instance', () => {
    const { pipe } = setup();

    expect(pipe).toBeTruthy();
  });

  function setup() {
    const fakeLikeDislikeService = jasmine.createSpyObj<LikeDislikeService>(
      'LikeDislikeService',
      ['isLiked']
    );

    const pipe = new FilterLikedPipe(fakeLikeDislikeService);

    return { pipe };
  }
});
