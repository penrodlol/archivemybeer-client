import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from 'src/app/models/beer.model';

type BeerUpdateResponse = {
    update: Pick<IBeer, '_id' | 'name' | 'brewer' | 'style' | 'city' | 'state' | 'country' | 'imageUrl'>;
};

type BeerUpdateVariables = {
    id: string;
    beer: Pick<IBeer, 'name' | 'brewer' | 'style' | 'city' | 'state' | 'country'>;
    file: File;
};

@Injectable()
export class UpdateBeerGQL extends Mutation<BeerUpdateResponse, BeerUpdateVariables> {
  document = gql`
    mutation updateBeer($id: String!, $beer: BeerPayload!, $file: Upload) {
      update(id: $id, beer: $beer, file: $file) {
        _id
        name
        brewer
        style
        city
        state
        country
        imageUrl
      }
    }
  `;
}
