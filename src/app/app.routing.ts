import{NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component'
import { HomeComponent } from './home/home.component'
import { PostCreateComponent } from './post/post-create/post-create.component'
import { PostListComponent } from './post/post-list/post-list.component'
import { PostReseravationComponent } from './post/post-reseravation/post-reseravation.component'

const routes: Routes=[
    {path: '', pathMatch: 'full', redirectTo: 'list'},
    {path: 'list', component: PostListComponent},
  //  {path: 'home', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create', component: PostCreateComponent},
    {path: 'reservation', component: PostReseravationComponent}
 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}