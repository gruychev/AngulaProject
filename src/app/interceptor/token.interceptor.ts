import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    
  } from '@angular/common/http';

  import{Injectable} from '@angular/core';
  import{Observable} from 'rxjs'



import { APP_KEY, APP_SECRET } from '../kinvey.tokens';

@Injectable()
  export class TokenInterceptor implements HttpInterceptor{    

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

        if(req.url.endsWith(`/user/${APP_KEY}`)  || req.url.endsWith('list')){
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
        

    }
}

    

 
  