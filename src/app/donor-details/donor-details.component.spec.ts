import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDetailsComponent } from './donor-details.component';
import { FormsModule } from '@angular/forms';

describe('DonorDetailsComponent', () => {
  let component: DonorDetailsComponent;
  let fixture: ComponentFixture<DonorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
