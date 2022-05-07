import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { StarsPipe } from './pipes/stars.pipe';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  Route,
  Router,
  RouterModule,
  UrlTree,
} from '@angular/router';
import { EditRestaurantPageComponent } from './pages/edit-restaurant-page/edit-restaurant-page.component';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantApiService } from './restaurant-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestaurantIdGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): UrlTree | boolean {
    const id = Number(route.paramMap.get('id'));
    const isNumeric = !isNaN(id);

    if (isNumeric) {
      return true;
    }

    // Redirect to the restaurants page
    return this.router.createUrlTree(['/restaurants']);
  }
}

@Injectable({ providedIn: 'root' })
export class RestaurantResolver implements Resolve<Restaurant> {
  constructor(private apiService: RestaurantApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Restaurant> {
    const id = Number(route.paramMap.get('id'));

    return this.apiService.getOne(id);
  }
}

@Injectable({ providedIn: 'root' })
export class RestaurantsResolver implements Resolve<Restaurant[]> {
  constructor(private apiService: RestaurantApiService) {}

  resolve(): Observable<Restaurant[]> {
    return this.apiService.getAll();
  }
}

const routes: Route[] = [
  {
    path: '',
    component: RestaurantsPageComponent,
    resolve: {
      restaurants: RestaurantsResolver,
    },
  },
  {
    path: 'new',
    component: EditRestaurantPageComponent,
  },
  {
    path: ':id',
    component: RestaurantPageComponent,
    canActivate: [RestaurantIdGuard],
    resolve: {
      restaurant: RestaurantResolver,
    },
  },
];

@NgModule({
  declarations: [
    RestaurantCardComponent,
    RestaurantListComponent,
    StarsPipe,
    RestaurantPageComponent,
    RestaurantsPageComponent,
    EditRestaurantPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RestaurantCardComponent, RestaurantListComponent],
})
export class RestaurantsModule {}
