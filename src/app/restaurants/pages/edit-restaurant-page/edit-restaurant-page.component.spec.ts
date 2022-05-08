import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RestaurantApiService } from '../../restaurant-api.service';
import { RestaurantsModule } from '../../restaurants.module';

import { EditRestaurantPageComponent } from './edit-restaurant-page.component';

describe('EditRestaurantPageComponent', () => {
  let component: EditRestaurantPageComponent;
  let fixture: ComponentFixture<EditRestaurantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsModule, RouterTestingModule],
      declarations: [EditRestaurantPageComponent],
      providers: [
        {
          provide: RestaurantApiService,
          useValue: jasmine.createSpyObj<RestaurantApiService>(
            'RestaurantApiService',
            ['create', 'update']
          ),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
