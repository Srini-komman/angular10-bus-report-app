import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BusReportsService } from 'src/app/services/bus-reports.service';
import { BUS_REPORT } from 'src/app/stubs/bus-reports.stub';
import { BusOrganisations } from 'src/app/interfaces/bus-organisations.model';

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
    component.busReportsData = BUS_REPORT.data;
    fixture.detectChanges();
  });

  it('should create BusOrganisationsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 organisation elements ', () => {
    component.busReportsData = BUS_REPORT.data;
    fixture.detectChanges();
    const divOrganisations = fixture.debugElement.queryAll(By.css('.bus-organisations'));
    expect(divOrganisations.length).toEqual(2);
  });

  it('should contain a child element with organisation label Sydney Buses - 25/09/2015 ', () => {
    component.busReportsData = BUS_REPORT.data;
    fixture.detectChanges();
    const divOrganisations = fixture.debugElement.queryAll(By.css('.bus-organisations'));
    expect(divOrganisations[0].nativeNode.innerText).toEqual('Sydney Buses - 25/09/2015 ');
  });

  it('should contain 2 child components for displaying bus services that belongs to the Sydney Buses', () => {
    component.busReportsData = BUS_REPORT.data;
    fixture.detectChanges();
    const divOrganisations = fixture.debugElement.queryAll(By.css('.bus-organisations'));
    expect(divOrganisations[0].childNodes.length).toEqual(2);
  });
});

// Creating BusReportsServiceStub to mock data and also to prevent backend calls
// For Unit testing we don't need to test with data from real services
class BusReportsServiceStub {
  getBusServices = () => {
    return of([]);
  }

}
