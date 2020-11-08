import { Component, ContentChild, Directive, EventEmitter, HostListener, Input, NgModule, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxIconComponent, NxIconModule } from '@aposin/ng-aquila/icon';
import { Icon } from '../../icon-registry/icons';

@Directive({ selector: '[ambSpeedDialRotator]' })
export class SpeedDialRotatorDirective {
  @Input() isToggled = false;
  @ContentChild(NxIconComponent) private readonly icon: NxIconComponent;

  constructor(private r2: Renderer2) { }

  @HostListener('click', ['$event'])
  onClick(): void {
    this.r2.setStyle(this.icon.el.nativeElement, 'transform', `rotate(${this.isToggled ? 0 : 90}deg)`);
    this.r2.setStyle(this.icon.el.nativeElement, 'transition', '100ms ease-in-out');
  }
}

@Component({
  selector: 'amb-speed-dial',
  template: `
      <section class="speed-dial">
        <ng-container *ngIf="isToggled">
          <ng-container *ngFor="let action of actions">
            <button
              class="speed-dial__action"
              nxIconButton="primary medium"
              type="button"
              (click)="onClick(action)">
              <nx-icon [name]="action"></nx-icon>
            </button>
          </ng-container>
        </ng-container>
        <button
          ambSpeedDialRotator
          nxIconButton="primary large"
          type="button"
          [isToggled]="isToggled"
          (click)="fromToggle()">
          <nx-icon [name]="toggle"></nx-icon>
        </button>
    </section>
  `,
  styles: [`
    .speed-dial {
      position: fixed;
      bottom: -10px;
      right: 20px;
      z-index: 9999999999;
    }

    button {
      border-radius: 35px;
      display: block;
    }

    .speed-dial__action {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  `],
})
export class SpeedDialComponent {
  @Input() toggle: Icon;
  @Input() actions: Icon[];
  @Output() actionTrigger: EventEmitter<Icon> = new EventEmitter();

  isToggled = false;

  fromToggle = () => this.isToggled = !this.isToggled;

  onClick = (action: Icon) => this.actionTrigger.emit(action);
}

@NgModule({
  declarations: [
    SpeedDialComponent,
    SpeedDialRotatorDirective,
  ],
  imports: [
    CommonModule,
    NxButtonModule,
    NxIconModule,
  ],
  exports: [SpeedDialComponent],
})
export class SpeedDialModule { }
