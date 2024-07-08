import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtKontaktComponent } from './nt-kontakt.component';

describe('NtKontaktComponent', () => {
  let component: NtKontaktComponent;
  let fixture: ComponentFixture<NtKontaktComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtKontaktComponent]
    });
    fixture = TestBed.createComponent(NtKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
