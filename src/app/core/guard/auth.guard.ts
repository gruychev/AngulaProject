import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService,
    private router: Router){}

    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return this.check();
  }

  check(){
    if(this.authService.checkIfLogged()){
      return true;
    }

    this.router.navigate(['/home'])

    return false;

  }
  
}
