import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, makeVar} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { IBeer } from './models/beer.model';

export const beersState = makeVar({
  collection: [],
  finished: false,
  index: 0,
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const link = httpLink.create({ uri: environment.APOLLO_URI });
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          collection: { read: (): IBeer[] => beersState().collection },
          finished: { read: (): boolean => beersState().finished },
        }
      }
    }
  });

  return {
    link,
    cache,
  };
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
