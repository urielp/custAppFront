import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorModalComponent } from './investor-modal.component';

describe('InvestorModalComponent', () => {
  let component: InvestorModalComponent;
  let fixture: ComponentFixture<InvestorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
