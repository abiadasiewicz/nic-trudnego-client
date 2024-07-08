import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtUslugiComponent } from './nt-uslugi.component';

describe('NtUslugiComponent', () => {
  let component: NtUslugiComponent;
  let fixture: ComponentFixture<NtUslugiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtUslugiComponent]
    });
    fixture = TestBed.createComponent(NtUslugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
