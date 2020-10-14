import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BusOrganisations } from '../interfaces/bus-organisations.model';

import { BusReportsService } from './bus-reports.service';

describe('BusReportsService', () => {
  let service: BusReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(BusReportsService);
  });

  it('should created BusReportsService', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 organisations successfully', () => {
    let busReportsData: any;
    service.getBusServices()
      .subscribe((busOrganisations: BusOrganisations) => {
        busReportsData = busOrganisations.data;
        expect(busReportsData.length).toEqual(2);
      }, () => {});
  });

  it('should return the organisation title Sydney Buses', () => {
    let busReportsData: any;
    service.getBusServices()
      .subscribe((busOrganisations: BusOrganisations) => {
        busReportsData = busOrganisations.data;
        expect(busReportsData[0].organisation).toEqual('Sydney Buses');
      }, () => {});
  });

  it('should return the bus details that belongs to Westbus', () => {
    let busReportsData: any;
    service.getBusServices()
      .subscribe((busOrganisations: BusOrganisations) => {
        busReportsData = busOrganisations.data;
        expect(busReportsData[1].busData.length > 0).toBeTruthy();
      }, () => {});
  });
});
