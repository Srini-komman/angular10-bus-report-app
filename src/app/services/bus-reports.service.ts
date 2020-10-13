import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusReportsService {

  constructor(private http: HttpClient) { }

  getBusServices = () => {
    return this.http.get('/assets/bus-services-data.json');
  }

}
