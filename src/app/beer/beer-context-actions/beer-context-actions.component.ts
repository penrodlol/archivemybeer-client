import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'amb-beer-context-actions',
  templateUrl: './beer-context-actions.component.html',
  styleUrls: ['./beer-context-actions.component.scss']
})
export class BeerContextActionsComponent {
  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleting: EventEmitter<boolean> = new EventEmitter<boolean>();

  isEditing = false;

  onEdit(): void {
    this.isEditing = !this.isEditing;
    this.editing.emit(this.isEditing);
  }

  onDelete(): void {
    this.deleting.emit(true);
  }

}
