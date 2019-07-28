import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';

@NgModule({
  declarations: [WorkersListComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule
  ]
})
export class WorkersModule { }
