import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreexclusionsComponent } from './coreexclusions.component';

describe('CoreexclusionsComponent', () => {
  let component: CoreexclusionsComponent;
  let fixture: ComponentFixture<CoreexclusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreexclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreexclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
