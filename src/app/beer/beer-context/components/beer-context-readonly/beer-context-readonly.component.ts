import { Component, Inject } from '@angular/core';
import { NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { IBeerModalData } from '../../models/beer-modal-data.model';

@Component({
  selector: 'amb-beer-context-readonly',
  templateUrl: './beer-context-readonly.component.html',
  styleUrls: ['./beer-context-readonly.component.scss']
})
export class BeerContextReadonlyComponent {
  constructor(@Inject(NX_MODAL_DATA) public data: IBeerModalData) { }
}
