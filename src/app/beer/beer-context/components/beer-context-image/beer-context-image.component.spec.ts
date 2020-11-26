import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextImageComponent } from './beer-context-image.component';

describe('BeerContextImageComponent', () => {
  let component: BeerContextImageComponent;
  let fixture: ComponentFixture<BeerContextImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
