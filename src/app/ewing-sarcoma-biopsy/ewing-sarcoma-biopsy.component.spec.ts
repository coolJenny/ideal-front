import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwingSarcomaBiopsyComponent } from './ewing-sarcoma-biopsy.component';

describe('EwingSarcomaBiopsyComponent', () => {
  let component: EwingSarcomaBiopsyComponent;
  let fixture: ComponentFixture<EwingSarcomaBiopsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwingSarcomaBiopsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwingSarcomaBiopsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
