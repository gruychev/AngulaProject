import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { BookModel } from 'src/app/components/shared/models/book.model';
import { PostInfo } from '../Post-info';

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

 // model:BookModel

  constructor() { }

  ngOnInit() {
  }

  clickButton(){    
    this.clickButtonEmiter.emit(this.post)
    

  }
}