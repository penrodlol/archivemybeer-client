import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBeersState } from 'src/app/app.state';

@Injectable({ providedIn: 'root' })
export class GetBeersStateGQL extends Query<IBeersState> {
    document = gql`query GetBeersState { state @client }`;
}
