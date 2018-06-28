import { SplitFactory } from '@splitsoftware/splitio';
import { fromEvent } from 'rxjs/observable/fromEvent';

const client = SplitFactory({
  core: {
    authorizationKey: 'your-api-key',
    key: 'customer-key'
  },
  startup: {
    readyTimeout: 20,
    requestTimeoutBeforeReady: 20
  }
}).client();

const isSdkReady = fromEvent(client, client.Event.SDK_READY);

export {
  client,
  isSdkReady
};
