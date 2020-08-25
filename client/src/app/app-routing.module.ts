import { TaskComponent } from './task/task.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [

  {
    path: 'add-task', component: AddTaskComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home-page', component: HomePageComponent,
    canActivate: [AuthGuard]

  },
  {path:'task', component:TaskComponent,
  canActivate: [AuthGuard]
},
  {path:'sign-up', component:SignUpComponent},
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {path:'a_task/:id', component:ShowTaskComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
