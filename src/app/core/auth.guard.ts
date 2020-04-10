import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService
    ){
        

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService.isAuthenticated()){
            return true;

        }

        throw new Error("Method not implemented.");
    }
    }