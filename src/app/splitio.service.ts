import { Injectable } from '@angular/core';
import { SplitFactory } from '@splitsoftware/splitio';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SplitioService {

  private _isSdkReady: boolean = null;
  private _factory: SplitIO.ISDK;
  private _splitUserClient: SplitIO.IClient;
  private _splitAccountClient: SplitIO.IClient;
  private _readyPromise: Promise<boolean>;

  // If you use an observable is easier to react to updates, so showing both cases.
  private _treatmentsSubject: Subject<SplitIO.Treatments> = new Subject();

  treatmentsObs: Observable<SplitIO.Treatments> = this._treatmentsSubject.asObservable();
  // You'll probably store your treatments somewhere else, but it's not
  // a bad idea to have those in a single source of truth and just consuming it from elsewhere.
  treatments: SplitIO.Treatments = {};
  // This can be dynamic or be on a separate constants file.
  userFeatures: string[] = [
    'feature-1', 'feature-2'
  ];
  accountFeatures: string[] = [
    'other-client-features'
  ];

  constructor() {
    // Spin up things.
    this._initSdk();
  }

  private _initSdk(): void {
    this._factory = SplitFactory({
      core: {
        authorizationKey: '<your-api-key>',
        key: '<main-client-key>'
      },
      startup: {
        readyTimeout: 3
      },
      // to showcase faster reloads.
      scheduler: {
        featuresRefreshRate: 15,
        segmentsRefreshRate: 15,
        metricsRefreshRate: 15,
        impressionsRefreshRate: 15,
        eventsPushRate: 15
      }
    });

    // Get client
    this._splitUserClient = this._factory.client();
    // and the one for a different key. This will share resources with the main one but segment data.
    this._splitAccountClient = this._factory.client('<second-client-key>');

    // Handle events
    this._setupSubscriptions(this._splitUserClient);
    this._setupSubscriptions(this._splitAccountClient);
  }

  private _setupSubscriptions(client): void {
    // Overwriting the reference to keep the latest one, since we're using it
    this._readyPromise = new Promise(resolve => {

      // Once the SDK is ready, we will resolve with true to render the page.
      client.on(client.Event.SDK_READY, () => {

        // If the SDK timed out on the limit we have, but we're ready now, get our treatments.
        // and also replace the promise we return from the other method.
        if (this._isSdkReady === false) {
          this._readyPromise = Promise.resolve(true);
          this._getTreatments();
        }

        this._isSdkReady = true;
        resolve(true)
      });

      // We won't throw an error here, we'll just return the false for the AppResolver to know it should not render the view.
      // A real use case would be to handle that as a control event.
      //
      // There's an advanced use case where you'll react to timeouts but once the SDK gets ready you'll use it.
      // Just showcasing a way you can handle that, but if you have a specific use case we can have more discussions.
      client.on(client.Event.SDK_READY_TIMED_OUT, () => {
        this._isSdkReady = false;
        resolve(false);
      });
    }).then((isReady: boolean) => {

      // Once the SDK has resolved somehow, update the treatments list.
      this._treatmentsSubject.next(this._getTreatments());

      // And we'll also subscribe to updates and refresh our flags on that event, using the observable.
      client.on(client.Event.SDK_UPDATE, () => {
        this._treatmentsSubject.next(this._getTreatments());
      });

      return isReady;
    });
  }

  /**
   * Return the treatments mixing up all flags. You could have two different functions.
   */
  private _getTreatments(): SplitIO.Treatments {
    const newUserFlags = this._splitUserClient.getTreatments(this.userFeatures);
    const newAccountFlags = this._splitAccountClient.getTreatments(this.accountFeatures);

    const newFlags = {
      ...newUserFlags,
      ...newAccountFlags
    };

    this.treatments = newFlags;
    this._treatmentsSubject.next(newFlags);

    return newFlags;
  }

  getReadyPromise(): Promise<boolean> {
    // Just return the promise, in case we need to ask for readiness later.
    return this._readyPromise;
  }
}
