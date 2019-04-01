import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStudentComponent } from './total-student.component';

describe('TotalStudentComponent', () => {
  let component: TotalStudentComponent;
  let fixture: ComponentFixture<TotalStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
