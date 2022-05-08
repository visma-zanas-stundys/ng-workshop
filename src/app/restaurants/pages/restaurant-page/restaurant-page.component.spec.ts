import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantApiService } from '../../restaurant-api.service';

import { RestaurantPageComponent } from './restaurant-page.component';

describe('RestaurantPageComponent', () => {
  let component: RestaurantPageComponent;
  let fixture: ComponentFixture<RestaurantPageComponent>;
  let routeData$: Subject<{ restaurant: Restaurant }>;

  beforeEach(async () => {
    routeData$ = new Subject<{ restaurant: Restaurant }>();

    await TestBed.configureTestingModule({
      declarations: [RestaurantPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: routeData$,
          },
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
        {
          provide: RestaurantApiService,
          useValue: jasmine.createSpyObj<RestaurantApiService>(
            'RestaurantApiService',
            ['delete']
          ),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
