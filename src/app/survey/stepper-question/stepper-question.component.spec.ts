import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperQuestionComponent } from './stepper-question.component';

describe('StepperQuestionComponent', () => {
  let component: StepperQuestionComponent;
  let fixture: ComponentFixture<StepperQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
