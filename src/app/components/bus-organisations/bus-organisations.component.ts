import { Component, OnInit } from '@angular/core';
import { BusReportsService } from 'src/app/services/bus-reports.service';
import { BusOrganisations } from 'src/app/interfaces/bus-organisations.model';

@Component({
  selector: 'app-bus-organisations',
  templateUrl: './bus-organisations.component.html',
  styleUrls: ['./bus-organisations.component.scss']
})
export class BusOrganisationsComponent implements OnInit {

  busReportsData = [];
  constructor(private busReportsService: BusReportsService) { }

  slideInOut = (busReport) => {
    busReport.slideIn = !busReport.slideIn;
  }

  ngOnInit(): void {
    this.busReportsService.getBusServices()
        .subscribe((busOrganisations: BusOrganisations) => {
          this.busReportsData = busOrganisations.data;
        }, () => {});
  }
}
