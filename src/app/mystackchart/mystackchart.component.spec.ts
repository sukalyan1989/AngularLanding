import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystackchartComponent } from './mystackchart.component';

describe('MystackchartComponent', () => {
  let component: MystackchartComponent;
  let fixture: ComponentFixture<MystackchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystackchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystackchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
