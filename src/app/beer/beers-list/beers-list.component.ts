import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetBeerStateGQL } from '../../gql/local/beer-state.gql';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { beersState } from 'src/app/graphql.module';
import { GetBeersGQL } from 'src/app/gql/remote/beers.gql';
import produce from 'immer';

@Component({
  selector: 'amb-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersListComponent {
  beerState$ = this.getBeerStateGQL.watch().valueChanges;

  isRendering = false;
  isLoadingInitial = true;

  constructor(
    public dialogService: NxDialogService,
    private getBeersGQL: GetBeersGQL,
    private getBeerStateGQL: GetBeerStateGQL,
  ) { }

  onScrolled(): void {
    if (beersState().finished) { return; }

    this.isRendering = true;

    this.getBeersGQL
      .watch()
      .fetchMore({ variables: { skip: beersState().index } })
      .then(({ data }) => {
        const update = produce(beersState(), current => {
          data.beers.collection.forEach(beer => current.collection.push(beer));
          current.finished = data.beers.finished;
          current.index += 20;
        });

        beersState(update);
      });
  }

  onInitialLoad = () => this.isLoadingInitial = false;

  onRenderedMore = () => this.isRendering = false;
}
