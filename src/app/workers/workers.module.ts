import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { ComponentsModule } from '../components/components.module';
import { SpaceCardComponent } from '../components/space-card/space-card.component';

@NgModule({
  declarations: [WorkersListComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    ComponentsModule,
    // SpaceCardComponent
  ]
})
export class WorkersModule { }
