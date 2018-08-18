import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoshowComponent } from './todoshow/todoshow.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoparentComponent } from './todoparent/todoparent.component';
import {FormsModule} from '@angular/forms';
import { UpfirstPipe } from './upfirst.pipe';
const routes: Routes = [
  { path: 'todo', component: TodoparentComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [TodoformComponent, TodoshowComponent, TodoparentComponent, UpfirstPipe]
})
export class TodoModule { }
