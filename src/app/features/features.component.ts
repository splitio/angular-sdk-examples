import { Component, ChangeDetectorRef } from '@angular/core';
import { SplitioService } from '../splitio.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
// We're not adding much code here. We're handling the display on the template.
export class FeaturesComponent {

  treatments: SplitIO.Treatments;
  featuresList: string[];

  constructor(private _splitioService: SplitioService, private _ref: ChangeDetectorRef) {
    this._refreshData(this._splitioService.treatments);

    // Subscribe to the observable. You could use the static list too.
    this._splitioService.treatmentsObs.subscribe(
      flags => {
        this._refreshData(flags);
        this._ref.detectChanges();
      }
    );
  }

  private _refreshData(flags) {
    this.treatments = { ...flags };
    this.featuresList = Object.keys(flags);
  }

  trackByFlagChanges = (i, item) => {
    const treatment = this.treatments[item];
    return `${item}-${treatment}`;
  }
}
