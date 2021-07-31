import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WarningComponent } from './warning.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WarningComponent', () => {
  let component: WarningComponent;
  let fixture: ComponentFixture<WarningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WarningComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
