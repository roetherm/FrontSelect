import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    // Lazy Loading Feature Modules
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'survey',
    // Lazy Loading Feature Modules
    loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
