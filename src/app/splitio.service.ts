import { Injectable } from '@angular/core';
import { SplitFactory } from '@splitsoftware/splitio';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Injectable()
export class SplitioService {

  splitio: SplitIO.ISDK;
  splitClient: SplitIO.IClient;
  isReady: boolean = false;
  treatments: SplitIO.Treatments
  features: string[] = [
    'feature_1', 'feature_2'
  ];

  constructor() {
    this.initSdk();
  }

  initSdk(): void {
    this.splitio = SplitFactory({
      core: {
        authorizationKey: 'your-api-key',
        key: 'customer-key'
      }
    });

    this.splitClient = this.splitio.client();

    // verify if sdk is initialized
    this.verifyReady();
  }

  getReadyPromise(): Promise<boolean> {
    return this.splitClient.ready().then(()=> true).catch(() => false);
  }

  private verifyReady(): void {
    const isReadyEvent = fromEvent(this.splitClient, this.splitClient.Event.SDK_READY);

    const subscription = isReadyEvent.subscribe({
      next() {
        this.isReady = true;
        console.log('Sdk ready: ', this.isReady);
      },
      error(err) {
        console.log('Sdk error: ', err);
        this.isReady = false;
      }
    });
  }

  getTreatments(): void {
    this.treatments = this.splitClient.getTreatments(this.features);
  }

}
