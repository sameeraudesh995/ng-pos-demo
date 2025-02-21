import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerModelComponent } from './update-customer-model.component';

describe('UpdateCustomerModelComponent', () => {
  let component: UpdateCustomerModelComponent;
  let fixture: ComponentFixture<UpdateCustomerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCustomerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
