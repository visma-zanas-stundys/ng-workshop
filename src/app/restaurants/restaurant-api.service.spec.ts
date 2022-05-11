import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestaurantApiService } from './restaurant-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../interfaces/restaurant';

describe('RestaurantApiService', () => {
  let service: RestaurantApiService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            delete: jasmine.createSpy().and.returnValue(of(0)),
            get: () => {},
          },
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(RestaurantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('delete', () => {
    it('should use a delete method when sending a request', () => {
      const result = service.delete(100);

      expect(httpClient.delete).toHaveBeenCalledWith('/api/restaurants/100');
      expect(result instanceof Observable).toEqual(true);
    });
  });

  describe('getOne', () => {
    it('should use a get method when sending a request & return the response', async () => {
      const mockRestaurant = { id: 100 } as Restaurant;
      spyOn(httpClient, 'get').and.returnValue(of(mockRestaurant));

      const result = service.getOne(100).toPromise();

      expect(httpClient.get).toHaveBeenCalledWith('/api/restaurants/100');
      expect(await result).toEqual(mockRestaurant);
    });
  });
});
