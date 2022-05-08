import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantApiService } from '../../restaurant-api.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant$: Observable<Restaurant> = this.route.data.pipe(
    map((data) => data['restaurant'])
  );

  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: RestaurantApiService
  ) {}

  ngOnInit(): void {}

  onDeleteClick(restaurantId: Restaurant['id']) {
    this.isDeleting = true;

    this.apiService.delete(restaurantId).subscribe({
      next: () => {
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: () => {
        this.isDeleting = false;
      },
      complete: () => {
        this.isDeleting = false;
      },
    });
  }
}
