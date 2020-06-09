import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListComponent } from './question-list/question-list.component';
import { MakeAdminComponent } from './make-admin/make-admin.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionListComponent
  },
  {
    path: 'makeAdmin',
    component: MakeAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
