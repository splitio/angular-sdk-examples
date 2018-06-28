import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent }   from './features/features.component';

// We'll only resolve Split here but we could potentially
// use it for other prerrequisite data.
import { AppResolver } from './app.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FeaturesComponent, resolve: {
    prerrequisitesReady: AppResolver
  }}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
