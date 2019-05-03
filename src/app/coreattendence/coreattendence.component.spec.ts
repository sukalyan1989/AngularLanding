import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreattendenceComponent } from './coreattendence.component';

describe('CoreattendenceComponent', () => {
  let component: CoreattendenceComponent;
  let fixture: ComponentFixture<CoreattendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreattendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
