import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetBeersStateGQL } from '../../gql/local/beer-state.gql';
import { addMany, beersState } from 'src/app/app.state';
import { GetBeersGQL } from 'src/app/gql/remote/beers.gql';
import { BeersListColumnsService } from './beers-list-columns.service';

@Component({
  selector: 'amb-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
  providers: [BeersListColumnsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersListComponent {
  beerState$ = this.getBeersStateGQL.watch().valueChanges;
  nxCol$ = this.beersListColumnsService.nxCol$;

  isRendering = false;
  isLoadingInitial = true;

  constructor(
    private beersListColumnsService: BeersListColumnsService,
    private getBeersGQL: GetBeersGQL,
    private getBeersStateGQL: GetBeersStateGQL,
  ) { }

  onScrolled(): void {
    if (beersState().finished) { return; }

    this.isRendering = true;

    this.getBeersGQL
      .watch()
      .fetchMore({ variables: { beersInput: { skip: beersState().index } } })
      .then(({ data }) => data.beers)
      .then(({ collection, finished }) => addMany({ collection, finished }));
  }

  onInitialLoad = () => this.isLoadingInitial = false;

  onRenderedMore = () => this.isRendering = false;
}
