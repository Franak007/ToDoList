import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {BitcoinComponent} from "./bitcoin/bitcoin.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task', component: TaskListComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
