import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsProjectsComponent } from './investors-projects.component';

describe('InvestorsProjectsComponent', () => {
  let component: InvestorsProjectsComponent;
  let fixture: ComponentFixture<InvestorsProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
