import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomComponent },
  { path: 'info', component: InfoComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
