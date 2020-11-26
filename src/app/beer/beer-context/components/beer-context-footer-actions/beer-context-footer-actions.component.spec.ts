import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextFooterActionsComponent } from './beer-context-footer-actions.component';

describe('BeerContextFooterActionsComponent', () => {
  let component: BeerContextFooterActionsComponent;
  let fixture: ComponentFixture<BeerContextFooterActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextFooterActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextFooterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
