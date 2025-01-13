import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for combining Tailwind classes, works identically in Svelte
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}