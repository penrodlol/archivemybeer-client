import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({ selector: '[ambBeerListRenderObserver]' })
export class BeerListRenderObserverDirective implements AfterViewInit, OnDestroy {
  @Output() initialLoad = new EventEmitter<boolean>();
  @Output() renderedMore = new EventEmitter<boolean>();

  private renderMutation: MutationObserver;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.renderMutation = new MutationObserver(() => {
      this.el.nativeElement.childElementCount <= 20 ?
        this.initialLoad.emit(true) :
        this.renderedMore.emit(true);
    });

    this.renderMutation.observe(this.el.nativeElement, { childList: true });
  }

  ngOnDestroy(): void { this.renderMutation.disconnect(); }
}
