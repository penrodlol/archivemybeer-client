import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileItem } from '@aposin/ng-aquila/file-uploader';
import { NX_MODAL_DATA } from '@aposin/ng-aquila/modal';
import { IBeerModalData } from '../../models/beer-modal-data.model';

@Component({
  selector: 'amb-beer-image-upload',
  templateUrl: './beer-image-upload.component.html',
  styleUrls: ['./beer-image-upload.component.scss']
})
export class BeerImageUploadComponent {
  @Input() control: FormControl;

  fileReader: FileReader = new FileReader();
  uploadUrl: string;

  constructor(
    @Inject(NX_MODAL_DATA) public data: IBeerModalData,
  ) { }

  onFilesSelected(files: FileItem[]): void {
    if (!files || files.length === 0) { return; }

    this.fileReader.onload = () => this.uploadUrl = this.fileReader.result as string;
    this.fileReader.readAsDataURL(files[0].file);
  }
}
