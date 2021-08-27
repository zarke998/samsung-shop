import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPhoneComponent } from './best-phone.component';

describe('BestPhoneComponent', () => {
  let component: BestPhoneComponent;
  let fixture: ComponentFixture<BestPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
