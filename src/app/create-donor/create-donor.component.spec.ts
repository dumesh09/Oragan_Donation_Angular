import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonorComponent } from './create-donor.component';

describe('CreateDonorComponent', () => {
  let component: CreateDonorComponent;
  let fixture: ComponentFixture<CreateDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
