import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from '../../models/beer.model';

type BeersResponse = {
    beers: {
        collection: IBeer[];
        finished: boolean;
    }
};

type BeersVariables = {
    skip: number;
};

@Injectable({ providedIn: 'root' })
export class GetBeersGQL extends Query<BeersResponse, BeersVariables> {
    document = gql`
        query GetBeers($skip: Int) {
            beers(skip: $skip) {
                collection {
                    _id
                    name
                    brewer
                    style
                    city
                    state
                    country
                    image
                    imageUrl
                }
                finished
            }
        }
    `;
}
