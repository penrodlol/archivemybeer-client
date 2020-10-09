import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeer } from '../../models/beer.model';

@Injectable({ providedIn: 'root' })
export class GetCollectionGQL extends Query<{ collection: IBeer[] }> {
    document = gql`query GetCollection { collection @client }`;
}

@Injectable({ providedIn: 'root' })
export class GetFinishedGQL extends Query<{ finished: boolean }> {
    document = gql`query GetFinishedGQL { finished @client }`;
}
