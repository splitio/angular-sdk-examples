import { Injectable } from '@angular/core';
import { client as splitClient } from '../splitio';

@Injectable()
export class SplitioService {

  splitClient: SplitIO.IClient = splitClient;
  treatments: SplitIO.Treatments
  features: string[] = [
    'editor_no_modal'
  ];

  getTreatments(): void {
    this.treatments = this.splitClient.getTreatments(this.features);
  }

}
