import produce from 'immer';

export function trimEntity<T>(entity: T, props: (keyof T)[]): T {
  return produce(entity, draft => props.forEach(prop => delete draft[prop as any]));
}
