import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  transform(value: number, emoji = '⭐'): unknown {
    return emoji.repeat(Math.round(value / 2) || 1);
  }
}
