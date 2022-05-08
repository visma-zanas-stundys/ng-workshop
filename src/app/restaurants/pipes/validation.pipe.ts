import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({ name: 'validation', pure: false })
export class ValidationPipe implements PipeTransform {
  transform(value: AbstractControl): string {
    if (value.untouched || !value.errors) {
      return '';
    }

    if (value.errors['required']) {
      return 'Required';
    } else if (value.errors['min']) {
      return 'Minimum value is ' + value.errors['min'].min;
    } else if (value.errors['max']) {
      return 'Maximum value is ' + value.errors['max'].max;
    } else if (value.errors['integer']) {
      return 'Must be an integer';
    }

    return 'Invalid';
  }
}
