import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterModel } from '../models/regieter.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registerFailed: boolean;
  errMessage: string;

  //@ViewChild('form') registrationForm: NgForm;

  constructor(private authService: AuthService,
    private router: Router) {
    this.model = new RegisterModel('', '', '', '', '','');
  }


  ngOnInit(): void {
  }
  

  register(){
    delete this.model['confirmPassword'];
    //this.registrationForm.reset()
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
