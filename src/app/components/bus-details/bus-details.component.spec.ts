import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BusDetailsComponent } from './bus-details.component';

describe('BusDetailsComponent', () => {
  let component: BusDetailsComponent;
  let fixture: ComponentFixture<BusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsComponent);
    component = fixture.componentInstance;
    //component.busServiceData = BUS_SERVICE_DATA.data;
    fixture.detectChanges();
  });

  it('should create BusDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a table tag', () => {
    //const tableElement = fixture.debugElement.query(By.css('bus-organisations'));
    //debugger;
    //expect(tableElement.nativeElement).toBeTruthy();
  });
});
