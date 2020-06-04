import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing-module';
import { SurveyComponent } from './survey/survey.component';

import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuestionContainerComponent } from './survey/question-container/question-container.component';
import { InfoContainerComponent } from './survey/info-container/info-container.component';

@NgModule({
  declarations: [
    SurveyComponent,
    QuestionContainerComponent,
    InfoContainerComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    MatCardModule,
    MatBadgeModule,
    MatCheckboxModule
  ]
})
export class SurveyModule { }
