import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextReadonlyComponent } from './beer-context-readonly.component';

describe('BeerContextReadonlyComponent', () => {
  let component: BeerContextReadonlyComponent;
  let fixture: ComponentFixture<BeerContextReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
