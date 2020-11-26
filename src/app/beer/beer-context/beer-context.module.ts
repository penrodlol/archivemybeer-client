import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFileUploaderModule } from '@aposin/ng-aquila/file-uploader';
import { NxTooltipModule } from '@aposin/ng-aquila/tooltip';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxRatingModule } from '@aposin/ng-aquila/rating';

import { LineTruncationLibModule } from 'ngx-line-truncation';

import { SpeedDialModule } from '@shared/speed-dial/speed-dial.module';
import { DividerModule } from '@shared/divider/divider.module';
import { SpinnerModule } from '@shared/spinner/spinner.module';

import { BeerContextComponent } from './components/beer-context.component';
import { BeerContextToolbarComponent } from './components/beer-context-toolbar/beer-context-toolbar.component';
import { BeerImageUploadComponent } from './components/beer-image-upload/beer-image-upload.component';
import { BeerContextFooterActionsComponent } from './components/beer-context-footer-actions/beer-context-footer-actions.component';
import { BeerContextFormComponent } from './components/beer-context-form/beer-context-form.component';
import { BeerContextReadonlyComponent } from './components/beer-context-readonly/beer-context-readonly.component';
import { BeerContextImageComponent } from './components/beer-context-image/beer-context-image.component';

@NgModule({
  declarations: [
    BeerContextComponent,
    BeerContextToolbarComponent,
    BeerImageUploadComponent,
    BeerContextFooterActionsComponent,
    BeerContextFormComponent,
    BeerContextReadonlyComponent,
    BeerContextImageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LineTruncationLibModule,
    SpeedDialModule,
    DividerModule,
    SpinnerModule,
    NxModalModule,
    NxGridModule,
    NxToolbarModule,
    NxButtonModule,
    NxIconModule,
    NxInputModule,
    NxDropdownModule,
    NxFileUploaderModule,
    NxTooltipModule,
    NxImageModule,
    NxRatingModule,
  ],
})
export class BeerContextModule { }
