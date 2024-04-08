import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { RandomComponent } from './random.component';

@NgModule({
  declarations: [
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RandomComponent]
})
export class RandomModule { }
