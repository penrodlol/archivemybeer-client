import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from '@models/beer.model';

type BeersResponse = {
    beers: {
        collection: IBeer[];
        finished: boolean;
    }
};

type BeersVariables = {
    beersInput: {
        skip?: number;
        search?: string;
        sortOrder?: 'asc' | 'desc';
    }
};

@Injectable({ providedIn: 'root' })
export class GetBeersGQL extends Query<BeersResponse, BeersVariables> {
    document = gql`
        query GetBeers($input: BeersInputDTO) {
            beers(input: $input) {
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
