import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'workers',
    loadChildren: () => import('./workers/workers.module').then(mod => mod.WorkersModule)
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
