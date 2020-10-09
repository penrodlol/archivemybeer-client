import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileItem } from '@aposin/ng-aquila/file-uploader';

@Component({
  selector: 'amb-beer-image-upload',
  templateUrl: './beer-image-upload.component.html',
  styleUrls: ['./beer-image-upload.component.scss']
})
export class BeerImageUploadComponent implements OnInit {
  @Output() file: EventEmitter<File | null> = new EventEmitter<File | null>();

  src: string;
  imageUploadForm: FormGroup;
  reader: FileReader = new FileReader();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.imageUploadForm = this.fb.group({
      image: this.fb.control(null, Validators.required),
    });
  }

  onFilesSelected(files: FileItem[]): void {
    if (!files || files.length === 0) { return; }

    this.reader.onload = () => {
      this.src = this.reader.result as string;
      this.file.emit(files[0].file);
    };
    this.reader.readAsDataURL(files[0].file);
  }

  onFileDeleted = () => this.src = null;

}
