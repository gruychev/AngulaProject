import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"



import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { from } from 'rxjs';


import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { PostModule } from './components/post/post.module';
import { AuthService } from './core/services/auth.service';
import { PostService } from './core/services/post.service';
import { AuthGuard } from './core/guard/auth.guard';
import { TokenInterceptor } from './core/interceptors/interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PostModule
  ],
  providers: [AuthService,PostService,,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
