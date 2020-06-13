import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GewichtungDialogComponent } from './gewichtung-dialog.component';

describe('GewichtungDialogComponent', () => {
  let component: GewichtungDialogComponent;
  let fixture: ComponentFixture<GewichtungDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GewichtungDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GewichtungDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
