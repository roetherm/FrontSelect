import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// Angular Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

// NgRx Imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user';

// Component Imports
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

// Module Imports
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { SurveyModule } from './survey/survey.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HistoryModule } from './history/history.module';
import { ModelModule } from './model/model.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolbarComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    SurveyModule,
    ModelModule,
    HistoryModule,
    // Angular Firebase Imports
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // NgRx Imports
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UserEffects]),
    LayoutModule,
    // Angular Material Module Imports
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [
    AngularFirestore,
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
