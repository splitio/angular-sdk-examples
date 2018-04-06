import { TestBed, inject } from '@angular/core/testing';

import { SplitioService } from './splitio.service';

describe('SplitioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplitioService]
    });
  });

  it('should be created', inject([SplitioService], (service: SplitioService) => {
    expect(service).toBeTruthy();
  }));
});
