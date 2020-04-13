import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
    
  } from '@angular/common/http';

import{Injectable} from '@angular/core';
import{Observable, from} from 'rxjs'
import { APP_KEY, APP_SECRET } from '../services/kinvey.tokens';
import {tap} from 'rxjs/operators'
import { AuthService } from '../services/auth.service';
import{ Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';


@Injectable()
  export class TokenInterceptor implements HttpInterceptor{
      constructor(private authService : AuthService,private toastr: ToastrService,
        private router : Router){}    

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

        if(req.url.endsWith('login')  || req.url.endsWith(APP_KEY)){
            req =req.clone({
                setHeaders:{
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'

                }
            })
           
        }else{
            req =req.clone({
                setHeaders:{
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'

                }
            })

        }           
              
        return next.handle(req)
        .pipe(tap((event : HttpEvent<any>)=>{
            if(event instanceof HttpResponse && req.url.endsWith('login')){
                this.successfulLogin(event['body'])

            }

        }, (err: any) =>{
            if(err instanceof HttpErrorResponse){
                switch(err.status){

                    case 401:
                        this.router.navigate['/login']
                    break;
                    case 404:
                        this.router.navigate['/not-found']
                    break;
                    case 500:
                        this.router.navigate['/server.error']
                    break;
                }

            }

        }));      

    }

    private successfulLogin(data) {
        this.authService.authtoken = data['_kmd']['authtoken'];
         localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        this.toastr.success('Logged in successfully', 'Success!');
        this.router.navigate(['/list']);
       
       }
     
}