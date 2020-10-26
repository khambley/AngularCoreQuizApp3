import { Injectable } from '@angular/core'
import { 
    HttpInterceptor, 
    HttpErrorResponse, 
    HttpRequest,
    HttpResponse,
    HttpHandler, 
    HttpEvent 
} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from './error-dialog/errorDialog.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public errorDialogService: ErrorDialogService, private router: Router) {}

    private handleUnauthorizedError(err: HttpErrorResponse): Observable<any> {
        //1. handle the 401 Unauthorized error
        if(err.status === 401 || err.status === 403){
            //2. navigate to the login page
            this.router.navigateByUrl(`/login`);
            console.log(err.message);
            return of(err.message);
        }
        return throwError(err);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        var token = localStorage.getItem('token')

        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authRequest).pipe(
           map((event: HttpEvent<any>) => {
               if (event instanceof HttpResponse){
                   console.log('event--->>>', event);
               }
               return event;
           }),
           catchError((error: HttpErrorResponse) => {
               let data = {};
               data = {
                reason: error && error.error && error.error.reason ? error.error.reason : 'You must be logged in to create or take a quiz.',
                status: error.status + " Unauthorized"
            };
            this.errorDialogService.openDialog(data);
            return throwError(error);
           }));
    }
}