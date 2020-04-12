import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/components/shared/models/login.model';
import { AuthService } from 'src/app/core/services/auth.service';


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
      .subscribe(data => console.dir(data),          
        
        
        
      
        err => {
          this.loginFailed = true;
          this.errMessage = err['error']['description'];
        })
  }
 

  ngOnInit() {
  }

}