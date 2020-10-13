import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {

  @Input() busDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
