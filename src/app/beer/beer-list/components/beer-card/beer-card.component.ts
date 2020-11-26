import { Component, Input } from '@angular/core';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { NxBreakpoints, NxViewportService } from '@aposin/ng-aquila/utils';
import { IBeer } from '@models/beer.model';
import { BeerContextComponent } from '@beer/beer-context/components/beer-context.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'amb-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {
  @Input() beer: IBeer;

  constructor(
    public dialogService: NxDialogService,
    private viewport: NxViewportService,
  ) { }

  onBeerSelected(beer: IBeer): void {
    this.viewport
      .max(NxBreakpoints.BREAKPOINT_LARGE)
      .pipe(take(1))
      .subscribe(isMobile => {
        this.dialogService
          .open(BeerContextComponent, {
            showCloseIcon: true,
            height: '95vh', minHeight: '95vh', maxHeight: '95vh',
            width: '95vw', minWidth: '95vw', maxWidth: '95vw',
            data: { beer, isMobile }
          });
      });
  }

}
