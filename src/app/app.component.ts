import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getRouteLoadingState().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  private getRouteLoadingState(): Observable<boolean> {
    return this.router.events.pipe(
      filter(
        (event) =>
          event instanceof NavigationStart || event instanceof NavigationEnd
      ),
      map((event) => (event instanceof NavigationStart ? true : false))
    );
  }
}
