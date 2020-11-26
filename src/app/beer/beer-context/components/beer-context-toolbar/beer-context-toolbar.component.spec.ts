import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextToolbarComponent } from './beer-context-toolbar.component';

describe('BeerContextToolbarComponent', () => {
  let component: BeerContextToolbarComponent;
  let fixture: ComponentFixture<BeerContextToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
