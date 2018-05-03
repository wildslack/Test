import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [UserService]
})
export class CoreModule { }
