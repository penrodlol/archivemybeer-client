import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';

@Component({
  selector: 'amb-header',
  template: `
  <header
    nx-header
    class="nx-margin-bottom-2m">
    <nx-header-brand class="nx-margin-right-5xl">
      <nx-link>
        <a>
          <figure nxFigure></figure>
          <nx-header-app-title>Archive My Beer</nx-header-app-title>
        </a>
      </nx-link>
    </nx-header-brand>
  </header>
  `
})
export class HeaderComponent { }

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NxHeaderModule,
    NxLinkModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
