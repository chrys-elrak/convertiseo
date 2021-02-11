import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string): string {
    const tmp = value.split('/');
    tmp.pop();
    return tmp.join('/');
  }
}


@Pipe({
  name: 'MB'
})
export class convertSizePipe implements PipeTransform {
  transform(value: string): string {
    return +(+value /1e+6).toFixed(2) + ' MB';
  }
}
