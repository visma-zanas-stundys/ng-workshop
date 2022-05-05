import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestaurantApiService } from './restaurant-api.service';

describe('RestaurantApiService', () => {
  let service: RestaurantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RestaurantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
