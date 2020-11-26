export const ICONS = [
  'bin',
  'cancel',
  'edit',
  'tag',
  'menu',
  'globe',
] as const;

export type Icon = typeof ICONS[number];
