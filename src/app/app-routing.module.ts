import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkdetailComponent} from './workdetail/workdetail.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from  './not-found/not-found.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
    children:
      [{ path:'addcomment' , component:AddComponent }]
  },
  {path: 'work/:id', component: WorkdetailComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomeComponent,
  WorkdetailComponent,
  NotFoundComponent,
  AddComponent
];
