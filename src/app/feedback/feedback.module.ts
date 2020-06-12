import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';
import { FeedbackRoutingModule } from './feedback-routing-module';
import { MatCardModule } from '@angular/material/card';
import { RatingComponentComponent } from './rating-component/rating-component.component';




@NgModule({
  declarations: [FeedbackComponent, RatingComponentComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedbackRoutingModule,
    MatCardModule
  ]
})
export class FeedbackModule { }
