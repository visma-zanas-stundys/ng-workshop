import { InjectionToken } from '@angular/core';

export const LIKE_STORAGE = new InjectionToken<Storage>('LIKE_STORAGE', {
  factory: () => localStorage,
});
