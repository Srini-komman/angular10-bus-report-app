import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMap'
})
export class StatusMapPipe implements PipeTransform {
  transform(deviation: number): string {
    let status: string;
    if (0 < deviation && deviation <= 300) {
      status = 'On Time';
    } else if (deviation < 0) {
      status = 'Early';
    } else if (deviation > 300) {
      status = 'Late';
    } else {
      status = 'Unknown';
    }
    return status;
  }
}
