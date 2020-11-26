import { Component, Inject } from '@angular/core';
import { NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { IBeerModalData } from '../../models/beer-modal-data.model';

@Component({
  selector: 'amb-beer-context-image',
  template: `
    <figure nxFigure="1by1">
      <img
        [src]="data.beer.imageUrl"
        alt="Beer Image">
    </figure>
  `,
  styles: [`
    figure {
      border: solid 10px var(--ui-05);
      border-radius: var(--card-border-radius);
      box-shadow: var(--elevation);
    }

    img { border-radius: inherit; }
  `]
})
export class BeerContextImageComponent {
  constructor(@Inject(NX_MODAL_DATA) public data: IBeerModalData) { }
}
