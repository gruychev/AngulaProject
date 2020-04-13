import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterModel } from 'src/app/components/shared/models/regieter.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registerFailed: boolean;
  errMessage: string;



  constructor(private authService: AuthService,
    private router: Router) {
    this.model = new RegisterModel('', '', '', '', '','');
  }


  ngOnInit(): void {
  }
  

  register(){
    delete this.model['confirmPassword'];
    
    this.authService.register(this.model)
      .subscribe(data => {
        this.router.navigate(['/login']);
      }, 
      err =>{
        this.registerFailed = true;
        this.errMessage = err['error']['description'];
      })
  }

}
