import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCategoryComponent } from './stepper-category.component';

describe('StepperCategoryComponent', () => {
  let component: StepperCategoryComponent;
  let fixture: ComponentFixture<StepperCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
