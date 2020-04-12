import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


import { PostInfo } from '../Post-info';
import { CreateModel } from 'src/app/components/shared/models/create.model';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input()post: PostInfo;
  @Input() rank: number;

  @Output()

  clickListEmiter  = new EventEmitter<Object>();

  model:CreateModel

  constructor() { }

  ngOnInit() {
  }

  clickButton(){    
    this.clickListEmiter.emit(this.post)
    

  }

  

  

  

 

  

  

}