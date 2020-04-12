import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostInfo } from '../../shared/models/Post-info';

@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.css']
})
export class PostBookComponent implements OnInit {

  @Input()post: PostInfo;
  @Input() rank: number;

  @Output()
  clickButtonEmiter  = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  clickButton(){    
    this.clickButtonEmiter.emit(this.post)
    

  }
}