import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { PostInfo } from '../Post-info';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts: PostInfo[];

  message=null;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }
  

  ngOnInit(): void {

    this.route.url.subscribe((segmentArr: UrlSegment[]) => {
      if (segmentArr.length === 1) {
        this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
          });
      } else {
        this.postService.getUserPosts()
          .subscribe((data) => {
            this.allPosts = data;
          });
      }
    })
  }

  fromChild(event){    
      const body = event;
      body['author'] = localStorage.getItem('username');  
      this.postService.createReservation(body)
        .subscribe(() => {
          this.toastr.success('Create in successfully', 'Success!');
      
        })   
  
      this.message=event;
  }



}
