import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { NgFormsManager } from '@ngneat/forms-manager';
import { IBeer } from '@models/beer.model';
import { trimEntity } from '@shared/utilities';
import { IBeerModalData } from '../../models/beer-modal-data.model';
import { BeerContextCountryService } from '../../services/beer-context-country.service';

export const BEER_CONTEXT_FORM = 'BEER_CONTEXT_FORM';
export interface BeerContextForm {
  BEER_CONTEXT_FORM: {
    beer: Omit<IBeer, '_id' | 'image' | 'imageUrl'>,
    file: File,
  };
}

@Component({
  selector: 'amb-beer-context-form',
  templateUrl: './beer-context-form.component.html',
  styleUrls: ['./beer-context-form.component.scss'],
  providers: [BeerContextCountryService],
})
export class BeerContextFormComponent implements OnInit, OnDestroy {
  readonly INPUT_MAX_LENGTH = 200;
  readonly countries$ = this.countryService.countries$;

  form: FormGroup;

  constructor(
    @Inject(NX_MODAL_DATA) public data: IBeerModalData,
    private manager: NgFormsManager<BeerContextForm>,
    private builder: FormBuilder,
    private countryService: BeerContextCountryService,
  ) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      beer: this.builder.group(trimEntity(this.data.beer, ['_id', 'image', 'imageUrl'])),
      file: this.builder.control(null),
    });

    this.manager.upsert(
      BEER_CONTEXT_FORM,
      this.form,
      // { persistState: true },
    );
  }

  ngOnDestroy(): void {
    this.manager.unsubscribe(BEER_CONTEXT_FORM);
  }

}
