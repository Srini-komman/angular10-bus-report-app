import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BusReportsService } from 'src/app/services/bus-reports.service';

import { BusOrganisationsComponent } from './bus-organisations.component';

describe('BusOrganisationsComponent', () => {
  let component: BusOrganisationsComponent;
  let fixture: ComponentFixture<BusOrganisationsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOrganisationsComponent ],
      providers: [
        {provide: BusReportsService, useClass: BusReportsServiceStub}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Creating BusReportsServiceStub to mock data and also to prevent backend calls
// For Unit testing we don't need to test with data from real services
class BusReportsServiceStub {
  getBusServices = () => {
    return of([]);
  }

}
