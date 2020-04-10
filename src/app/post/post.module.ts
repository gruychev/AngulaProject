import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostReseravationComponent } from './post-reseravation/post-reseravation.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
    declarations:[
        PostCreateComponent,
        PostInfoComponent,
        PostListComponent,
        PostReseravationComponent,
        PostInfoComponent      

    ],

    imports:[
        CommonModule,
        FormsModule,
        RouterModule
    ]

})
export class PostModule{}