import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing-module';
import { SurveyComponent } from './survey/survey.component';

import { SharedModule } from '../shared/shared.module';
import { StepperCategoryComponent } from './stepper-category/stepper-category.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperQuestionComponent } from './stepper-question/stepper-question.component';

@NgModule({
  declarations: [
    SurveyComponent,
    StepperCategoryComponent,
    StepperQuestionComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    MatStepperModule
  ]
})
export class SurveyModule { }
