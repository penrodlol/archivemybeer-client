import { NgModule, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'amb-spinner',
  template: `
  <div class='spinner'>
    <ngx-spinner
      bdColor='transparent'
      type='ball-pulse-sync'
      [size]='size'
      [fullScreen]='false'>
    </ngx-spinner>
  </div>
  `,
  styles: [
    `
    .spinner {
      position: relative;
      min-height: 150px;
    }
    `
  ]
})
export class SpinnerComponent implements OnInit {
  @Input() size = 'medium';

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void { this.spinner.show(); }

}

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
