import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

// splitio sdk
import { SplitioService } from './splitio.service';
import { AppResolver } from './app.resolver';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FeaturesComponent
  ],
  providers: [
    // Import the resolver
    AppResolver,
    SplitioService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
