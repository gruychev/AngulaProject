import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { PostInfo } from '../../shared/models/Post-info';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { CreateModel } from '../../shared/models/create.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  model: CreateModel;
  post: PostInfo;

  allPosts$: Observable<PostInfo[]>;



  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private toastr: ToastrService,    
  ) { }
  

  ngOnInit(): void {

   
    this.route.url.subscribe((segmentArr: UrlSegment[]) => {     
        this.allPosts$=this.postService.getAll()      
     
         })
     }
     

  fromChild(event){ 
      const body =event  
      body['author'] = localStorage.getItem('username');        
      this.postService.createReservation(body)
        .subscribe(() => {         
          this.toastr.success('Book successfully', 'Success!');  
                
        })  
         
    
  }



}
