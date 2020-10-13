import { TestBed } from '@angular/core/testing';

import { BusReportsService } from './bus-reports.service';

describe('BusReportsService', () => {
  let service: BusReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
