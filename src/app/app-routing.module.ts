import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SearchComponent} from './search/search.component';
import {GithubaboutComponent} from './githubabout/githubabout.component';
import{NotfoundcomponentComponent} from './notfoundcomponent/notfoundcomponent.component'
const routes: Routes = [

  { path: 'search', component: SearchComponent},
  { path: 'about', component: GithubaboutComponent},
  { path: '', redirectTo:"/search", pathMatch:"full"},
  { path:'**', component:NotfoundcomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
