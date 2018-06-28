import { Component, OnInit } from '@angular/core';
import { SplitioService } from '../splitio.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  treatments: SplitIO.Treatments

  constructor(public splitioService: SplitioService) { }

  ngOnInit() {
    this.splitioService.getTreatments();
  }
}
