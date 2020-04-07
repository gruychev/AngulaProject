import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { from } from 'rxjs';
import { AuthService } from './authentication/auth.service';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostService } from './post.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostInfoComponent } from './post/post-info/post-info.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostReseravationComponent } from './post/post-reseravation/post-reseravation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostCreateComponent,
    PostListComponent,
    PostInfoComponent,
    PostReseravationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
