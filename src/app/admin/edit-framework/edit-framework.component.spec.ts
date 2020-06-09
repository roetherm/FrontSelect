import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFrameworkComponent } from './edit-framework.component';

describe('EditFrameworkComponent', () => {
  let component: EditFrameworkComponent;
  let fixture: ComponentFixture<EditFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
