import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepientDetailsComponent } from './recepient-details.component';

describe('RecepientDetailsComponent', () => {
  let component: RecepientDetailsComponent;
  let fixture: ComponentFixture<RecepientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
