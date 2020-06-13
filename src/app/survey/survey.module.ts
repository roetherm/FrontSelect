import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing-module';
import { SurveyComponent } from './survey/survey.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuestionContainerComponent } from './survey/question-container/question-container.component';
import { InfoContainerComponent } from './survey/info-container/info-container.component';
import { ResultBoxComponent } from './survey/result-box/result-box.component';
import { WinnerBoxComponent } from './survey/winner-box/winner-box.component';
import { FinishDialogComponent } from './survey/finish-dialog/finish-dialog.component';
import { GewichtungDialogComponent } from './survey/gewichtung-dialog/gewichtung-dialog.component';

@NgModule({
  declarations: [
    SurveyComponent,
    QuestionContainerComponent,
    InfoContainerComponent,
    ResultBoxComponent,
    WinnerBoxComponent,
    FinishDialogComponent,
    GewichtungDialogComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    MatCardModule,
    MatBadgeModule,
    MatCheckboxModule,
    AngularFireFunctionsModule
  ]
})
export class SurveyModule { }
