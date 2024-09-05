import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtCookieInfoComponent } from './nt-cookie-info.component';

describe('NtCookieInfoComponent', () => {
  let component: NtCookieInfoComponent;
  let fixture: ComponentFixture<NtCookieInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtCookieInfoComponent]
    });
    fixture = TestBed.createComponent(NtCookieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
