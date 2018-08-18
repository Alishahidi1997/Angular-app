import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upfirst'
})
export class UpfirstPipe implements PipeTransform {

  transform(value: String): String {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
