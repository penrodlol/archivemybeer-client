import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from '../../models/beer.model';

export type BeerStateResponse = {
    collection: IBeer[],
    finished: boolean,
    index: number,
};

@Injectable({ providedIn: 'root' })
export class GetBeerStateGQL extends Query<BeerStateResponse> {
    document = gql`query GetBeerState { state @client }`;
}
