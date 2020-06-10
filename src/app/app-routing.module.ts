import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, hasCustomClaim } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const adminOnly = () => hasCustomClaim('admin');

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
      {
        path: 'model',
        canActivate: [AngularFireAuthGuard],
        // Lazy Loading Feature Modules
        loadChildren: () => import('./model/model.module').then(m => m.ModelModule)
      },
      {
        path: 'history',
        canActivate: [AngularFireAuthGuard],
        // Lazy Loading Feature Modules
        loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
      },
      {
        path: 'admin',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: adminOnly },
        // Lazy Loading Feature Modules
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
