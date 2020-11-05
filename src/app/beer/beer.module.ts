import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxTooltipModule } from '@aposin/ng-aquila/tooltip';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxFileUploaderModule } from '@aposin/ng-aquila/file-uploader';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { LineTruncationLibModule } from 'ngx-line-truncation';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerContextComponent } from './beer-context/beer-context.component';
import { BeerContextActionsComponent } from './beer-context-actions/beer-context-actions.component';
import { BeerListRenderObserverDirective } from './beers-list/beer-list-render-observer.directive';
import { BeerImageUploadComponent } from './beer-image-upload/beer-image-upload.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { SelectPipe } from './pipes/select.pipe';

const beerRoutes: Routes = [
  { path: '', component: BeersListComponent },
];

@NgModule({
  declarations: [
    BeersListComponent,
    BeerContextComponent,
    BeerContextActionsComponent,
    BeerListRenderObserverDirective,
    BeerImageUploadComponent,
    BeerCardComponent,
    SelectPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerModule,
    SvgIconsModule,
    NxGridModule,
    NxCardModule,
    NxImageModule,
    NxTooltipModule,
    NxModalModule,
    NxToolbarModule,
    NxButtonModule,
    NxInputModule,
    NxFileUploaderModule,
    LineTruncationLibModule,
    InfiniteScrollModule,
    RouterModule.forChild(beerRoutes),
  ]
})
export class BeerModule { }
