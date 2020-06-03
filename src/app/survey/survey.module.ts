import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing-module';
import { SurveyComponent } from './survey/survey.component';

import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { QuestionContainerComponent } from './survey/question-container/question-container.component';

@NgModule({
  declarations: [
    SurveyComponent,
    QuestionContainerComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    MatCardModule,
    MatBadgeModule
  ]
})
export class SurveyModule { }
