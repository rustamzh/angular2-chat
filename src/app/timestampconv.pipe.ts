import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampconv'
})
export class TimestampconvPipe implements PipeTransform {

  transform(timestamp: any): Date {
    let date = new Date(timestamp);

    return date;
  }
}
