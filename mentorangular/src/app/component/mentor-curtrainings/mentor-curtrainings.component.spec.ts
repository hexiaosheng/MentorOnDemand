import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCurtrainingsComponent } from './mentor-curtrainings.component';

describe('MentorCurtrainingsComponent', () => {
  let component: MentorCurtrainingsComponent;
  let fixture: ComponentFixture<MentorCurtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCurtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCurtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
