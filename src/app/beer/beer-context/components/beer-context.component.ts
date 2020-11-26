import { Component, Inject } from '@angular/core';
import { NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { BeerContextEditingState } from '../state/beer-context-editing.state';
import { IBeerModalData } from '../models/beer-modal-data.model';

@Component({
  selector: 'amb-beer-context',
  templateUrl: './beer-context.component.html',
  styleUrls: ['./beer-context.component.scss'],
})
export class BeerContextComponent {
  editing$ = this.editingState.editing$;

  constructor(
    @Inject(NX_MODAL_DATA) public data: IBeerModalData,
    private editingState: BeerContextEditingState
  ) { }
}
