import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// splitio sdk
import { SplitioService } from './splitio.service';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FeaturesComponent
  ],
  providers: [ 
    SplitioService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
