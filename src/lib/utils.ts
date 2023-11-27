import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmpty(
  value: Array<any> | string | undefined | null,
): boolean {
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === 'string' && value === '') {
    return true;
  }
  if (value === null || value === undefined) {
    return true;
  }
  return false;
}
