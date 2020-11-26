import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxTooltipModule } from '@aposin/ng-aquila/tooltip';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxIconModule } from '@aposin/ng-aquila/icon';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { LineTruncationLibModule } from 'ngx-line-truncation';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BeerContextModule } from '../beer-context/beer-context.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';
import { BeerListComponent } from './components/beer-list.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { BeerListRenderObserverDirective } from './directives/beer-list-render-observer.directive';
import { SelectPipe } from '../pipes/select.pipe';

const beerListRoutes: Routes = [
  { path: '', component: BeerListComponent },
];

@NgModule({
  declarations: [
    BeerListComponent,
    BeerCardComponent,
    BeerListRenderObserverDirective,
    SelectPipe,
  ],
  imports: [
    CommonModule,
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
    RouterModule.forChild(beerListRoutes),
  ]
})
export class BeerListModule { }
