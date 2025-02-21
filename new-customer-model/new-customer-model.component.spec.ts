import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerModelComponent } from './new-customer-model.component';

describe('NewCustomerModelComponent', () => {
  let component: NewCustomerModelComponent;
  let fixture: ComponentFixture<NewCustomerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
