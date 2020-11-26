import { Component } from '@angular/core';
import { BeerContextEditingState } from '../../state/beer-context-editing.state';

@Component({
  selector: 'amb-beer-context-toolbar',
  templateUrl: './beer-context-toolbar.component.html',
  styleUrls: ['./beer-context-toolbar.component.scss']
})
export class BeerContextToolbarComponent {
  readonly editing$ = this.editingState.editing$;

  constructor(private editingState: BeerContextEditingState) { }

  onClick = () => this.editingState.update();

}
