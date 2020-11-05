import { NgModule, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'amb-spinner[type]',
  template: `
  <div class='spinner'>
    <ngx-spinner
      bdColor='transparent'
      [color]="color"
      [type]='type'
      [size]='size'
      [fullScreen]='fullscreen'>
      <ng-container *ngIf="message">
        <p class="message">{{message}}</p>
      </ng-container>
    </ngx-spinner>
  </div>
  `,
  styles: [
    `
    .spinner {
      position: relative;
      min-height: 150px;
    }

    .message {
      color: var(--text-01);
      font-size: 20px;
    }
    `
  ]
})
export class SpinnerComponent implements OnInit {
  @Input() color = 'var(--ui-04)';
  @Input() size = 'medium';
  @Input() fullscreen = 'false';

  @Input() type: string;
  @Input() message: string;

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
