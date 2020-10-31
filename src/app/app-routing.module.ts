import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkComponent} from "./work/work.component";
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'projects', component: WorkComponent},
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
