import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoredisadvantagedComponent } from './coredisadvantaged.component';

describe('CoredisadvantagedComponent', () => {
  let component: CoredisadvantagedComponent;
  let fixture: ComponentFixture<CoredisadvantagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoredisadvantagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoredisadvantagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
