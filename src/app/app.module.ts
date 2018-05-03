import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BeenInvitedModule} from './been-invited/been-invited.module'
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BeenInvitedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                                                                                                                                                                                                                                                                                