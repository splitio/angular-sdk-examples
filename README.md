# Angular JS SDK examples
> Currently, the project is using Angular 11.2.5.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1 and then updated to the version 11.2.4

The goal of this project is to show one way to set up the Split SDK in Angular.

## Getting started
_Optional:_ If `nvm` is locally installed, run `nvm i` to set the required Node version. 
- `npm install`
- `npm install -g @angular/cli`
- `ng serve` will start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

>_Note:_ To effectively test the SDK, you need to set the corresponding Browser [Api key](https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#2-instantiate-the-sdk-and-create-a-new-split-client). 
>The API key is available on your *Organization Settings* page, on the *APIs* tab. Remember to choose `browser` type.
>In addition to that, you may want to create some Split/s in the admin and then update [the list of features defined in the code example](https://github.com/splitio/angular-sdk-examples/blob/efant_updateExample/src/app/splitio.service.ts#L27-L31).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you need help with Split usage, please reach out to support@split.io.
