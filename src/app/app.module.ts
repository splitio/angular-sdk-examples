import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SplitioService } from './splitio.service';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SplitioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
