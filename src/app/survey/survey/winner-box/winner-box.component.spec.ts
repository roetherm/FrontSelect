import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerBoxComponent } from './winner-box.component';

describe('WinnerBoxComponent', () => {
  let component: WinnerBoxComponent;
  let fixture: ComponentFixture<WinnerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
