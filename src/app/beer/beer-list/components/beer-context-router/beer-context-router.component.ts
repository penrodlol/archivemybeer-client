import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { NxBreakpoints, NxViewportService } from '@aposin/ng-aquila/utils';
import { BeerContextComponent } from '@beer/beer-context/components/beer-context.component';
import { BeerContextState } from '@beer/state/beer-context.state';
import { GetBeerGQL } from '@gql/remote/beer.gql';
import { IBeer } from '@models/beer.model';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'amb-beer-context-router',
  template: ``,
  providers: [GetBeerGQL],
})
export class BeerContextRouterComponent implements OnInit {

  constructor(
    private beerContextState: BeerContextState,
    public dialogService: NxDialogService,
    private viewport: NxViewportService,
    private router: Router,
    private route: ActivatedRoute,
    private getBeerGQL: GetBeerGQL,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.viewport.max(NxBreakpoints.BREAKPOINT_LARGE),
      this.beerContextState.beerContext$,
    ])
    .pipe(take(1))
    .subscribe(([isMobile, beer]) => {
      beer ?
        this.openModal(isMobile, beer) :
        this.getBeerGQL
          .fetch({ input: { _id: this.route.snapshot.params.id }})
          .pipe(take(1))
          .subscribe(({ data }) => this.openModal(isMobile, data.beer));
    });
  }

  openModal = (isMobile: boolean, beer: IBeer) => this.dialogService
    .open(BeerContextComponent, {
      showCloseIcon: true,
      height: '95vh', minHeight: '95vh', maxHeight: '95vh',
      width: '95vw', minWidth: '95vw', maxWidth: '95vw',
      data: { beer, isMobile }
    })
    .afterClosed()
    .pipe(take(1))
    .subscribe(() => this.router.navigate(['beers']))

}
