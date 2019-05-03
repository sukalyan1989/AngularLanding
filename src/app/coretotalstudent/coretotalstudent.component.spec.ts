import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoretotalstudentComponent } from './coretotalstudent.component';

describe('CoretotalstudentComponent', () => {
  let component: CoretotalstudentComponent;
  let fixture: ComponentFixture<CoretotalstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoretotalstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoretotalstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
