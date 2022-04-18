import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultConverterComponent } from './mult-converter.component';

describe('MultConverterComponent', () => {
  let component: MultConverterComponent;
  let fixture: ComponentFixture<MultConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
