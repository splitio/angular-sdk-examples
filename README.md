# Angular (Angular > v2) javascript sdk examples

The goal of this project is to show how to set up split in off-the-grid mode
for unit tests using Angular 5.

## Getting started

- `npm install`
- `npm install -g @angular/cli`
- `npm start` it will start a server on `localhost:4200`

- Update your relevant Split API Key, Track type and Split names in: ./src/app/splitio.service.ts
- Lookup the following section for SDK API and Track type:
private _initSdk(): void {
    this._factory = SplitFactory({
      core: {
        authorizationKey: '[API KEY here]',
        key: 'Tracke type'
      },
- Lookup the line below and update the Split names needed:
  userFeatures: string[] = [
    '[Split1]', '[Split2]'



## Notes

Used example code from `https://angular.io/guide/quickstart`.
