import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StatusMapPipe } from 'src/app/pipes/status-map.pipe';
import { BUS_REPORT } from 'src/app/stubs/bus-reports.stub';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BusDetailsComponent } from './bus-details.component';

describe('BusDetailsComponent', () => {
  let component: BusDetailsComponent;
  let fixture: ComponentFixture<BusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusDetailsComponent,
        StatusMapPipe ],
        imports: [
          BrowserAnimationsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsComponent);
    component = fixture.componentInstance;
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create BusDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain table tag', () => {
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.tagName).toEqual('TABLE');
  });

  it('should contain 6 rows', () => {
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows.length).toEqual(6);
  });

  it('should contain header Bus ID', () => {
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[0].firstChild.innerText).toEqual('Bus ID');
  });

  it('should contain header Route Variant', () => {
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[0].children[1].innerText).toEqual('Route Variant');
  });

  it('should contain header Status', () => {
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[0].children[2].innerText).toEqual('Status');
  });

  it('should display Bus ID 42612', () => {
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[1].children[0].innerText).toEqual('42612');
  });

  it('should display Route Varieant 891 2 1', () => {
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[1].children[1].innerText).toEqual('891 2 1');
  });

  it('should display Status On Time', () => {
    component.busDetails = BUS_REPORT.data[0].busData;
    fixture.detectChanges();
    const busDetails = fixture.debugElement.queryAll(By.css('.content-bus-details-table'));
    expect(busDetails[0].nativeNode.rows[1].children[2].innerText).toEqual('On Time');
  });
});
