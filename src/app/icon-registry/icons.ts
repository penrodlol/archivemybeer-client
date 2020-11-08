export const ICONS = [
  'bin',
  'cancel',
  'edit',
  'tag',
  'menu',
] as const;

export type Icon = typeof ICONS[number];
