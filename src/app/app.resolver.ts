import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SplitioService } from './splitio.service';

@Injectable()
export class AppResolver implements Resolve<any> {
  // Inject the service on the resolver.
  constructor(private splitService: SplitioService) {}

  resolve() {
    // Use it on the resolve function and return a promise
    // for the ready.
    return this.splitService.getReadyPromise();
  }
}
