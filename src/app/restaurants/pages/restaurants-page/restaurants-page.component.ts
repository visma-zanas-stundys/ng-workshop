import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css'],
})
export class RestaurantsPageComponent {
  restaurants$ = this.route.data.pipe(map((data) => data['restaurants']));
  showLiked = false;

  constructor(private route: ActivatedRoute) {}
}
