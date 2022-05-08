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

  create(formValue: Omit<Restaurant, 'id'>): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(this.endpoint, formValue);
  }

  update(formValue: Restaurant): Observable<Restaurant> {
    return this.httpClient.put<Restaurant>(
      `${this.endpoint}/${formValue.id}`,
      formValue
    );
  }

  delete(restaurantId: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${restaurantId}`);
  }
}
