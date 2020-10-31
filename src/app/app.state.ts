import { IBeer } from './models/beer.model';
import { makeVar, ReactiveVar } from '@apollo/client/core';
import produce from 'immer';

export interface IBeersState {
  collection: IBeer[];
  finished: boolean;
  index: number;
}

export const beersState: ReactiveVar<IBeersState> = makeVar({
  collection: [],
  finished: false,
  index: 0,
});

export const addMany = (update: Pick<IBeersState, 'collection' | 'finished'>): void => {
  const newState = produce(beersState(), draft => {
    draft.collection.push(...update.collection);
    draft.finished = update.finished;
    draft.index += 20;
  });

  beersState(newState);
};
