import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReseravationComponent } from './post-reseravation.component';

describe('PostReseravationComponent', () => {
  let component: PostReseravationComponent;
  let fixture: ComponentFixture<PostReseravationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReseravationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReseravationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
