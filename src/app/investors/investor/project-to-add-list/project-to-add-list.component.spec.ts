import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToAddListComponent } from './project-to-add-list.component';

describe('ProjectToAddListComponent', () => {
  let component: ProjectToAddListComponent;
  let fixture: ComponentFixture<ProjectToAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectToAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectToAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
