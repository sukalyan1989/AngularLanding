import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreaboutComponent } from './coreabout.component';

describe('CoreaboutComponent', () => {
  let component: CoreaboutComponent;
  let fixture: ComponentFixture<CoreaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
