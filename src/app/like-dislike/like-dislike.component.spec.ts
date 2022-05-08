import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurant } from '../interfaces/restaurant';

import { LikeDislikeComponent } from './like-dislike.component';

describe('LikeDislikeComponent', () => {
  let component: LikeDislikeComponent;
  let fixture: ComponentFixture<LikeDislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeDislikeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDislikeComponent);
    component = fixture.componentInstance;
    component.restaurant = {
      id: 1,
      name: 'McDonalds',
    } as Restaurant;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
