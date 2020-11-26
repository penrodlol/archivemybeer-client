import { Component } from '@angular/core';
import { NxBreakpoints, NxViewportService } from '@aposin/ng-aquila/utils';
import { distinctUntilChanged } from 'rxjs/operators';
// import { BeerContextEditingStateService } from '../services/beer-context-editing-state.service';

@Component({
  selector: 'amb-beer-context-footer-actions',
  templateUrl: './beer-context-footer-actions.component.html',
  styleUrls: ['./beer-context-footer-actions.component.scss']
})
export class BeerContextFooterActionsComponent {
  isMobile$ = this.vp.max(NxBreakpoints.BREAKPOINT_LARGE).pipe(distinctUntilChanged());

  constructor(
    private vp: NxViewportService,
    // private editingState: BeerContextEditingStateService
  ) { }

  onClick = () => null;

}
