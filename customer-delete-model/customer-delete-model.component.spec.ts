import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeleteModelComponent } from './customer-delete-model.component';

describe('CustomerDeleteModelComponent', () => {
  let component: CustomerDeleteModelComponent;
  let fixture: ComponentFixture<CustomerDeleteModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDeleteModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
