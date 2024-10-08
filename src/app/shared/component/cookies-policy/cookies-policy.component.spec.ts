import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPolicyComponent } from './cookies-policy-popup.component';

describe('CookiesPolicyComponent', () => {
  let component: CookiesPolicyComponent;
  let fixture: ComponentFixture<CookiesPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesPolicyComponent]
    });
    fixture = TestBed.createComponent(CookiesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
