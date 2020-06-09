import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';

import { SharedModule } from '../shared/shared.module';


import { QuestionListComponent } from './question-list/question-list.component';
import { MakeAdminComponent } from './make-admin/make-admin.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [QuestionListComponent, MakeAdminComponent, EditDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  entryComponents: [
    EditDialogComponent
  ]
})
export class AdminModule { }
