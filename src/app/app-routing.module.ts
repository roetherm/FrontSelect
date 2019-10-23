import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SurveyComponent } from './survey/survey/survey.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // No layout routes
  {
    path: 'login',
    // Lazy Loading Feature Modules
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // Layout routes
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'survey',
        canActivate: [AngularFireAuthGuard],
        // Lazy Loading Feature Modules
        loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
      },
    ]
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
