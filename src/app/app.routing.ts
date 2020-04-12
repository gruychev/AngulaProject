import{NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"

import { AuthGuard } from './core/guard/auth.guard'
import { HomeComponent } from './components/home/home.component'
import { PostListComponent } from './components/post/post-list/post-list.component'
import { LoginComponent } from './components/authentication/login/login.component'
import { RegisterComponent } from './components/authentication/register/register.component'
import { PostCreateComponent } from './components/post/post-create/post-create.component'
import { PostReseravationComponent } from './components/post/post-reseravation/post-reseravation.component'

const routes: Routes=[
    {path: '', pathMatch: 'full', redirectTo: 'home'},    
    {path: 'home', component: HomeComponent},
    {path: 'list', component: PostListComponent,canActivate: [AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create', component: PostCreateComponent,canActivate: [AuthGuard]},
    {path: 'reservation', component: PostReseravationComponent,canActivate: [AuthGuard]}
 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}