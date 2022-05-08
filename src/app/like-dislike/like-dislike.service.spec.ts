import { TestBed } from '@angular/core/testing';

import { LikeDislikeService } from './like-dislike.service';
import { LIKE_STORAGE } from './like-storage.token';

describe('LikeDislikeService', () => {
  let service: LikeDislikeService;
  let storage: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LIKE_STORAGE,
          useValue: jasmine.createSpyObj<Storage>('Storage', [
            'getItem',
            'setItem',
          ]),
        },
      ],
    });

    storage = TestBed.inject(LIKE_STORAGE) as jasmine.SpyObj<Storage>;
    service = TestBed.inject(LikeDislikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
