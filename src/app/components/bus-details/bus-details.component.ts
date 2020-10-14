import { Component, OnInit, Input } from '@angular/core';
import { statusMap } from 'src/app/animations/status-map.animation';
import { slideInOut } from 'src/app/animations/slide-in-out.animation';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss'],
  animations: [
    statusMap,
    slideInOut
  ]
})
export class BusDetailsComponent implements OnInit {

  @Input() busDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
