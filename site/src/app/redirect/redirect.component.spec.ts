import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectComponent } from './redirect.component';

describe('RedirectComponent', () => {
  let component: RedirectComponent;
  let fixture: ComponentFixture<RedirectComponent>;
  const assignMock = jest.fn();

  beforeAll(() => {
    delete window.location;
    window.location = {
      assign: assignMock,
      ancestorOrigins: null,
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: null,
      port: null,
      protocol: null,
      search: null,
      reload: null,
      replace: null,
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirectComponent],
    })
        .compileComponents();
    fixture = TestBed.createComponent(RedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    assignMock.mockClear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
