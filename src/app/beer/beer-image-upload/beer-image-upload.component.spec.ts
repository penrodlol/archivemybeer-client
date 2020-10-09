import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerImageUploadComponent } from './beer-image-upload.component';

describe('BeerImageUploadComponent', () => {
  let component: BeerImageUploadComponent;
  let fixture: ComponentFixture<BeerImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
