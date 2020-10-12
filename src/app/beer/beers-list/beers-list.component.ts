import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetCollectionGQL, GetFinishedGQL } from '../../gql/local/beer-state.gql';
import { IBeer } from 'src/app/models/beer.model';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { BeerContextComponent } from '../beer-context/beer-context.component';
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

  constructor(
    public dialogService: NxDialogService,
    private getBeersGQL: GetBeersGQL,
    private getCollectionGQL: GetCollectionGQL,
    private getfinishedGQL: GetFinishedGQL,
  ) { }

  onBeerSelected(beer: IBeer): void {
    this.dialogService
      .open(BeerContextComponent, {
        showCloseIcon: true,
        height: '95vh', minHeight: '95vh', maxHeight: '95vh',
        width: '95vw', minWidth: '95vw', maxWidth: '95vw',
        data: { beer }
      });
  }

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

  onAdd(): void {
    this.dialogService
    .open(BeerContextComponent, {
      showCloseIcon: true,
      height: '95vh', minHeight: '95vh', maxHeight: '95vh',
      width: '95vw', minWidth: '95vw', maxWidth: '95vw',
    });
  }

  onRendered = () => this.isRendering = false;
}
