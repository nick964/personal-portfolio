import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkComponent} from "./work/work.component";
import {HomeComponent} from "./home/home.component";


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
  { path: 'work', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
