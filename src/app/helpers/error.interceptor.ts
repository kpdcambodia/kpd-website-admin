import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if ([300, 301, 302].indexOf(event.body.error) !== -1) {
                        this.authenticationService.logout();
                    }
                    
                    const modEvent = event.body.error ? null : event.clone({ body: event.body })
                    return modEvent;
                }
            }),
            catchError(err => {
                if ([401, 403].indexOf(err.status) !== -1) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    this.authenticationService.logout();
                }
                
                const error = err.error.message || err.statusText;
                return throwError(error);
            })
        )
    }
}
