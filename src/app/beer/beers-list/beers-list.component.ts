import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetCollectionGQL, GetFinishedGQL } from '../../gql/local/beer-state.gql';
import { IBeer } from 'src/app/models/beer.model';
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
  beers$: Observable<IBeer[]> = this.getCollectionGQL.watch().valueChanges.pipe(map(ref => ref.data.collection));
  finished$: Observable<boolean> = this.getfinishedGQL.watch().valueChanges.pipe(map(ref => ref.data.finished));

  isRendering = false;
  isLoadingInitial = true;

  constructor(
    public dialogService: NxDialogService,
    private getBeersGQL: GetBeersGQL,
    private getCollectionGQL: GetCollectionGQL,
    private getfinishedGQL: GetFinishedGQL,
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
