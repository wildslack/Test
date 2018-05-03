import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {BeenInvitedModule} from './been-invited/been-invited.module'
import { HeaderModule } from './header/header.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BeenInvitedComponent } from './been-invited/been-invited.component';
import { CoreModule } from './core/core.module';

const appRoutes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'been-invited', component: BeenInvitedComponent },
  { path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    LandingPageModule,
    BeenInvitedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                                                                                                                                                                                                                                                                                