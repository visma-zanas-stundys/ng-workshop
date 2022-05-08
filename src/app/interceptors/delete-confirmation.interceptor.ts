import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, tap } from 'rxjs';

@Injectable()
export class DeleteConfirmationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'DELETE') {
      // Leave the request untouched
      return next.handle(req);
    }

    const confirmation = confirm('Are you sure you want to delete?');

    if (!confirmation) {
      return EMPTY; // Abort the request
    }

    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          alert('Item deleted');
        }
      })
    );
  }
}
