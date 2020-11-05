import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NxDialogService, NxModalRef, NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { IBeer } from 'src/app/models/beer.model';
import { AddBeerGQL } from '../../gql/remote/add-beer.gql';
import { UpdateBeerGQL } from '../../gql/remote/update-beer.gql';
import { DeleteBeerGQL } from '../../gql/remote/delete-beer.gql';
import produce from 'immer';
import { take } from 'rxjs/operators';
import { beersState } from 'src/app/app.state';

@Component({
  selector: 'amb-beer-context',
  templateUrl: './beer-context.component.html',
  styleUrls: ['./beer-context.component.scss'],
  providers: [
    AddBeerGQL,
    UpdateBeerGQL,
    DeleteBeerGQL,
  ],
})
export class BeerContextComponent implements OnInit {
  beerForm: FormGroup;
  file: File | null;
  isEditing = false;

  constructor(
    @Inject(NX_MODAL_DATA) public data: { beer: IBeer },
    private fb: FormBuilder,
    public dialogService: NxDialogService,
    private addBeerGQL: AddBeerGQL,
    private updateBeerGQL: UpdateBeerGQL,
    private deleteBeerGQL: DeleteBeerGQL,
  ) { }

  ngOnInit(): void {
    this.beerForm = this.fb.group({
      name: this.data?.beer.name,
      brewer: this.data?.beer.brewer,
      style: this.data?.beer.style,
      city: this.data?.beer.city,
      state: this.data?.beer.state,
      country: this.data?.beer.country,
    });
  }

  unsorted = () => { };

  onEditing = (isEditing: boolean) => this.isEditing = isEditing;

  onDelete(): void {
    // this.deleteBeerGQL
    //   .mutate({
    //     id: this.data.beer._id,
    //     image: this.data.beer.image
    //   })
    //   .pipe(take(1))
    //   .subscribe((ref: any) => {
    //     const del = produce(beersState(), draft => {
    //       const index = draft.collection.findIndex(beer => beer._id === ref.data.id);
    //       draft.collection.splice(draft.collection[index], 1);
    //     });

    //     beersState(del);
    //     this.dialogService.closeAll();
    //   });
  }

  onSave(): void {
    if (this.data) {
      this.updateBeerGQL
      .mutate(
        {
          id: this.data.beer._id,
          beer: this.beerForm.value,
          file: this.file,
        },
        { context: { useMultipart: true } }
      )
      .pipe(take(1))
      .subscribe(ref => {
        const update = produce(beersState(), draft => {
          const index = draft.collection.findIndex(beer => beer._id === ref.data.update._id);
          const imageUrl = ref.data.update.imageUrl ? ref.data.update.imageUrl : draft.collection[index].imageUrl;

          // draft.collection[index] = { ...ref.data.update, imageUrl };
        });

        beersState(update);

        this.isEditing = false;
      });
    } else {
      this.addBeerGQL
        .mutate(
          {
            beer: this.beerForm.value,
            file: this.file,
          },
          { context: { useMultipart: true } }
        )
        .pipe(take(1))
        .subscribe(console.log);
    }
  }

  onFile = (file: File | null) => this.file = file;
}
