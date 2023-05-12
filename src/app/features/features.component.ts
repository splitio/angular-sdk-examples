import { Component, OnInit } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  treatments: SplitIO.Treatments

  constructor(public splitService: SplitService) { }

  featureFlagss: string[] = [
    'feature-flag-A',
    'feature-flag-B',
    'feature-flag-C'
  ];

  /**
   * Function to get and set the treatments from the Split API.
   *
   * @returns void
   */
  getTreatments() {
    this.splitService.sdkReady$?.subscribe({
      next: () => {this.treatments = this.splitService.getTreatments(this.featureFlagss) },
      error: (err) => { console.log(err) }
    });
  }
}
