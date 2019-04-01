import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisadvantagedComponent } from './disadvantaged.component';

describe('DisadvantagedComponent', () => {
  let component: DisadvantagedComponent;
  let fixture: ComponentFixture<DisadvantagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisadvantagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisadvantagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
