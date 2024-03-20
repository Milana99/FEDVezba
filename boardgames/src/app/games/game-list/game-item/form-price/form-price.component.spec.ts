import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPriceComponent } from './form-price.component';

describe('FormPriceComponent', () => {
  let component: FormPriceComponent;
  let fixture: ComponentFixture<FormPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPriceComponent]
    });
    fixture = TestBed.createComponent(FormPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
