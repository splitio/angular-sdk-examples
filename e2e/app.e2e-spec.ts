'use strict'; // necessary for es6 output in node

import { browser } from 'protractor';

const expectedH1 = 'Example App Angular';
const expectedTitle = `${expectedH1}`;

describe('Example App Angular 5 Tests', () => {
  describe('Initial page', () => {

    it(`has title '${expectedTitle}'`, () => {
      expect(browser.getTitle()).toEqual(expectedTitle);
    });

  });
});
