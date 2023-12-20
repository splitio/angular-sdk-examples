import { Component, OnInit } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  treatments: SplitIO.Treatments
  featureFlagss: SplitIO.SplitNames

  constructor(public splitService: SplitService) { }

  /**
   * Function to get and set the treatments from the Split API.
   *
   * @returns void
   */
  getTreatments() {
    this.featureFlagss = this.splitService.getSplitNames();
    this.treatments = this.splitService.getTreatments(this.featureFlagss)
  }
}
