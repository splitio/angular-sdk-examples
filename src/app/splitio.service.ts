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
    'feature_1',
    'feature_2',
    'feature_3'
  ];

  constructor() { }

  initSdk(): void {
    // Running the SDK in 'off-the-grid' Mode since authorizationKey : 'localhost'
    // To bind a non 'off-the-grid' client, inject the real API Key
    this.splitio = SplitFactory({
      core: {
        authorizationKey: 'localhost',
        key: 'customer-key'
      },
      // In non-localhost mode, this map is ignored.
      features: {
        feature_1: 'off',
        feature_2: 'on',
        feature_3: 'v2'
      }
    });

    this.splitClient = this.splitio.client();

    // verify if sdk is initialized
    this.verifyReady();
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
