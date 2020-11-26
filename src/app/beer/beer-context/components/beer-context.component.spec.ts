import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextComponent } from './beer-context.component';

describe('BeerContextComponent', () => {
  let component: BeerContextComponent;
  let fixture: ComponentFixture<BeerContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
