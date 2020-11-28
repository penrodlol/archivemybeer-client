import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from '@models/beer.model';

type BeerResponse = {
    beer: IBeer;
};

type BeerVariables = {
  input: {
    _id: any;
  }
};

@Injectable()
export class GetBeerGQL extends Query<BeerResponse, BeerVariables> {
  document = gql`
    query GetBeer($input: BeerInputDTO!) {
      beer(input: $input) {
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
    }
  `;
}
