import { Component, OnInit } from '@angular/core';
import { CreateModel } from 'src/app/components/shared/models/create.model';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  model: CreateModel;
  loginFailed: boolean;
  errMessage: string;

  constructor(private authService: AuthService,
     private router: Router,
     private toastr: ToastrService,
     private postService: PostService,)
     
     {
    
    this.model = new CreateModel('','','');
  }

  createPost() {
    const body = this.model;
    body['author'] = localStorage.getItem('username');

    this.postService.createPost(body)
      .subscribe(() => {
        this.toastr.success('Create in successfully', 'Success!');
        this.router.navigate([ '/list' ]);
      })
  }

  







  ngOnInit(): void {
  }

}
