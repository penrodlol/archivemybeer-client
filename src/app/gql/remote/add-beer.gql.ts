import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AddBeerGQL extends Mutation {
  document = gql`
    mutation AddBeer($beer: BeerPayload!, $file: Upload!) {
      add(beer: $beer, file: $file) {
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
