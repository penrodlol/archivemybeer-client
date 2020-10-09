import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

type BeerDeleteResponse = {
    id: string
};

type BeerDeleteVariables = {
    id: string;
    image: string;
};

@Injectable()
export class DeleteBeerGQL extends Mutation<BeerDeleteResponse, BeerDeleteVariables> {
  document = gql`
    mutation DeleteBeer($id: String!, $image: String!) {
      delete(id: $id, image: $image)
    }
  `;
}
