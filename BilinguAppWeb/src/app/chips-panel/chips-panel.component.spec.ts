import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsPanelComponent } from './chips-panel.component';

describe('ChipsPanelComponent', () => {
  let component: ChipsPanelComponent;
  let fixture: ComponentFixture<ChipsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
