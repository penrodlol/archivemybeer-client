import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[ambBeerListRenderObserver]'
})
export class BeerListRenderObserverDirective implements AfterViewInit, OnDestroy {
  @Output() rendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  private renderMutation: MutationObserver;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.renderMutation = new MutationObserver(() => this.rendered.emit(true));
    this.renderMutation.observe(this.el.nativeElement, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  ngOnDestroy(): void { this.renderMutation.disconnect(); }
}
