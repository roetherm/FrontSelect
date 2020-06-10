import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelRoutingModule } from './model-routing-module';
import { ModelComponent } from './model/model.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [ModelComponent],
  imports: [
    CommonModule,
    ModelRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class ModelModule { }
