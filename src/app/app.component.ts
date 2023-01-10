import { Component, OnInit } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Split SDK - Angular example';

  constructor(public splitService: SplitService) { }

  ngOnInit() {
    this.initSplitService();
  }

  /**
   * This method initializes the SDK with the required Browser APIKEY
   * and the 'key' according to the Traffic type set (ex.: an user id).
   *
   * @returns void
   */
  initSplitService(): void {
    this.splitService.init({
      core: {
        authorizationKey: '<YOUR_SDK_BROWSER_APIKEY>',
        key: '<USER_ID>'
      }
    }).subscribe({
      next: () => { console.log('Split service ready') },
      error: (err) => { console.log(err) }
    });
  }
}
