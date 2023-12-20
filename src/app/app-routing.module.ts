import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitioGuard } from '@splitsoftware/splitio-angular';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SplitioGuard],
    children: [
      {
        path: 'treatments',
        component: FeaturesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
