import { Component, Input, OnInit } from '@angular/core';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { IBeer } from '../../models/beer.model';
import { BeerContextComponent } from '../beer-context/beer-context.component';

@Component({
  selector: 'amb-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {
  @Input() beer: IBeer;

  constructor(
    public dialogService: NxDialogService,
  ) { }

  onBeerSelected(beer: IBeer): void {
    this.dialogService
      .open(BeerContextComponent, {
        showCloseIcon: true,
        height: '95vh', minHeight: '95vh', maxHeight: '95vh',
        width: '95vw', minWidth: '95vw', maxWidth: '95vw',
        data: { beer }
      });
  }

}
