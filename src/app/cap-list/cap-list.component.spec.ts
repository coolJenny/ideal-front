import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapListComponent } from './cap-list.component';

describe('CapListComponent', () => {
  let component: CapListComponent;
  let fixture: ComponentFixture<CapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
