import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partialBold'
})
export class PartialBoldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
