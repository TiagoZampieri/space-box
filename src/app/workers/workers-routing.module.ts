import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersListComponent } from './workers-list/workers-list.component';

const routes: Routes = [
  {
    path: 'workers-list',
    component: WorkersListComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workers-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
