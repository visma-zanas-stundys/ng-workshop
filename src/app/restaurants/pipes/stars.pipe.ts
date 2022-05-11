import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  transform(value: number, emoji = '⭐'): unknown {
    const clampedValue = Math.min(Math.max(value, 0), 10);

    return emoji.repeat(Math.round(clampedValue / 2) || 1);
  }
}
