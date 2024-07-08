import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtEmailFormComponent } from './nt-email-form.component';

describe('EmailComponent', () => {
  let component: NtEmailFormComponent;
  let fixture: ComponentFixture<NtEmailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtEmailFormComponent]
    });
    fixture = TestBed.createComponent(NtEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
