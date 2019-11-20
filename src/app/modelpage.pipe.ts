import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelpage'
})
export class ModelpagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
