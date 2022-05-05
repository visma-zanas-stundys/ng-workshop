import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../interfaces/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantApiService {
  private readonly endpoint = '/api/restaurants';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.endpoint);
  }

  getOne(id: Restaurant['id']): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`${this.endpoint}/${id}`);
  }
}
