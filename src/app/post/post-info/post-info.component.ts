import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


import { PostInfo } from '../Post-info';
import { CreateModel } from 'src/app/authentication/models/create.model';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input()post: PostInfo;
  @Input() rank: number;

  @Output()
  clickButtonEmiter  = new EventEmitter();

  model:CreateModel

  constructor() { }

  ngOnInit() {
  }

  clickButton(){    
    this.clickButtonEmiter.emit(this.post)
    

  }

  

  

  

 

  

  

}