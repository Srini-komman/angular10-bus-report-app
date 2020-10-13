import { Bus } from './bus.model';

export interface BusOrganisations {
  data: [
      {
          busData: Array<Bus>;
          date: string;
          organisation: string;
      }
  ];
}
