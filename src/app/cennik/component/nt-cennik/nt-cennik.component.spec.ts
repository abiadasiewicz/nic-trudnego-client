import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtCennikComponent } from './nt-cennik.component';

describe('NtCennikComponent', () => {
  let component: NtCennikComponent;
  let fixture: ComponentFixture<NtCennikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtCennikComponent]
    });
    fixture = TestBed.createComponent(NtCennikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
