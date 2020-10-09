import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderModule as NgneatContentLoader } from '@ngneat/content-loader';
import { BeersListContentLoaderComponent } from './beers-list-content-loader/beers-list-content-loader.component';

@NgModule({
  declarations: [
    BeersListContentLoaderComponent,
  ],
  imports: [
    CommonModule,
    NgneatContentLoader,
  ],
  exports: [
    BeersListContentLoaderComponent,
  ]
})
export class ContentLoaderModule { }
