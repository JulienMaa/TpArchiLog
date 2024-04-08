import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    HomeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
