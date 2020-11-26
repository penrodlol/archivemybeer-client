import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxTooltipModule } from '@aposin/ng-aquila/tooltip';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { LineTruncationLibModule } from 'ngx-line-truncation';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerListRenderObserverDirective } from './beers-list/beer-list-render-observer.directive';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { SelectPipe } from './pipes/select.pipe';
import { BeerContextModule } from './beer-context/beer-context.module';

const beerRoutes: Routes = [
  { path: '', component: BeersListComponent },
];

@NgModule({
  declarations: [
    BeersListComponent,
    BeerListRenderObserverDirective,
    BeerCardComponent,
    SelectPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BeerContextModule,
    SpinnerModule,
    SvgIconsModule,
    NxGridModule,
    NxCardModule,
    NxImageModule,
    NxTooltipModule,
    NxModalModule,
    NxIconModule,
    LineTruncationLibModule,
    InfiniteScrollModule,
    RouterModule.forChild(beerRoutes),
  ]
})
export class BeerModule { }
