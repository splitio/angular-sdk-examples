import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { isSdkReady } from './splitio';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
isSdkReady.subscribe(() => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);
});

