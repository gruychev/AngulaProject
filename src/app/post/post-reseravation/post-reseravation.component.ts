import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { PostInfo } from '../Post-info';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-reseravation',
  templateUrl: './post-reseravation.component.html',
  styleUrls: ['./post-reseravation.component.css']
})
export class PostReseravationComponent implements OnInit {

  allPosts: PostInfo[];

  message=null;

  id:string

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  

  ngOnInit(): void {

    
        this.postService.getUserPosts()
          .subscribe((data) => {
            this.allPosts = data;
          });
      }
    
  

  fromChild(event){    

      this.postService.deletePost(event._id)
        .subscribe(() => {
          this.postService.getReservation()
            .subscribe((data) => {
              this.allPosts = data;
            });
        })
    }

    
     
           
  

  // console.log(event._id)
   // this.message=event;

  



}