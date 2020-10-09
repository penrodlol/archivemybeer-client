import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextActionsComponent } from './beer-context-actions.component';

describe('BeerContextActionsComponent', () => {
  let component: BeerContextActionsComponent;
  let fixture: ComponentFixture<BeerContextActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
