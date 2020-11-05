import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { beersState } from './app.state';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const link = httpLink.create({ uri: environment.APOLLO_URI });
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: { fields: { state: { read: () => beersState() } } }
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
