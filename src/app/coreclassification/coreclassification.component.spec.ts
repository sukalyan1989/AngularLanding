import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreclassificationComponent } from './coreclassification.component';

describe('CoreclassificationComponent', () => {
  let component: CoreclassificationComponent;
  let fixture: ComponentFixture<CoreclassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreclassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreclassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
