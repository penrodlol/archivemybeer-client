import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContextFormComponent } from './beer-context-form.component';

describe('BeerContextFormComponent', () => {
  let component: BeerContextFormComponent;
  let fixture: ComponentFixture<BeerContextFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContextFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
