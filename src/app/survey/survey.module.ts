import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing-module';
import { SurveyComponent } from './survey/survey.component';

import { SharedModule } from '../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    SurveyComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    MatStepperModule
  ]
})
export class SurveyModule { }
