import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, Subject } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';

import { RestaurantsPageComponent } from './restaurants-page.component';

describe('RestaurantsPageComponent', () => {
  let component: RestaurantsPageComponent;
  let fixture: ComponentFixture<RestaurantsPageComponent>;

  let routeData$: Subject<{ restaurants: Restaurant[] }>;

  beforeEach(async () => {
    routeData$ = new Subject<{ restaurants: Restaurant[] }>();

    await TestBed.configureTestingModule({
      declarations: [RestaurantsPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: routeData$,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
