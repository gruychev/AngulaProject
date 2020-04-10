import { Component, OnInit} from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean;
  errMessage: string;
  
 
  constructor(
    private authService: AuthService,
     private router: Router,
     private toastr: ToastrService
     ) {
    this.model = new LoginModel('', '');
  }

  login() {
    this.authService.login(this.model)
    
      .subscribe(data => {
        this.successfulLogin(data);       
        this.toastr.success('Logged in successfully', 'Success!');
        this.router.navigate(['/list']);
        
      },
        err => {
          this.loginFailed = true;
          this.errMessage = err['error']['description'];
        })
  }

 successfulLogin(data) {
   this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
   localStorage.setItem('username', data['username']);
  
  }


 

  ngOnInit() {
  }

}